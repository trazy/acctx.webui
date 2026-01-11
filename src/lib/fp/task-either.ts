import { Either } from './either';

export type TaskEither<E, A> = () => Promise<Either<E, A>>;

export const TaskEither = {
  right:
    <R, L = never>(a: R): TaskEither<L, R> =>
    async () =>
      Either.right(a),

  left:
    <L, R = never>(e: L): TaskEither<L, R> =>
    async () =>
      Either.left(e),

  map:
    <R, N>(f: (a: R) => N) =>
    <L>(ma: TaskEither<L, R>): TaskEither<L, N> =>
    async () => {
      const e = await ma();
      return Either.map(f)(e);
    },

  chain:
    <L, R, N>(f: (a: R) => TaskEither<L, N>) =>
    (ma: TaskEither<L, R>): TaskEither<L, N> =>
    async () => {
      const e = await ma();
      return Either.isLeft(e) ? e : f(e.right)();
    },

  mapLeft:
    <E, G>(f: (e: E) => G) =>
    <A>(ma: TaskEither<E, A>): TaskEither<G, A> =>
    async () => {
      const e = await ma();
      return Either.mapLeft(f)(e);
    },

  orElse:
    <E, A, G>(f: (e: E) => TaskEither<G, A>) =>
    (ma: TaskEither<E, A>): TaskEither<G, A> =>
    async () => {
      const e = await ma();
      return Either.isLeft(e) ? f(e.left)() : e;
    },

  orElseRight:
    <E, A>(f: (e: E) => A) =>
    (ma: TaskEither<E, A>): TaskEither<never, A> =>
    async () => {
      const e = await ma();
      return Either.isLeft(e)
        ? Either.right(f(e.left))
        : (e as Either<never, A>);
    },

  orElseRun:
    <E, A>(f: (e: E) => Promise<A>) =>
    (ma: TaskEither<E, A>): TaskEither<never, A> =>
    async () => {
      const e = await ma();
      if (Either.isLeft(e)) {
        const recoveryValue = await f(e.left); // 비동기로 복구 값 생성
        return Either.right(recoveryValue); // 무조건 Right로 전환
      }
      return e as Either<never, A>;
    },

  chainEither: <L, R, N>(f: (a: R) => Either<L, N>) =>
    TaskEither.chain((a: R) => TaskEither.fromEither(f(a))),

  bimap:
    <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) =>
    (ma: TaskEither<E, A>): TaskEither<G, B> =>
    async () => {
      const e = await ma();
      return Either.bimap(f, g)(e);
    },

  tryCatch:
    <L, R>(
      f: () => Promise<R>,
      onRejected: (reason: unknown) => L,
    ): TaskEither<L, R> =>
    async () => {
      try {
        const a = await f();
        return Either.right(a);
      } catch (err) {
        return Either.left(onRejected(err));
      }
    },

  sequence:
    <L, R>(list: TaskEither<L, R>[]): TaskEither<L, R[]> =>
    async () => {
      const results = [];
      for (const task of list) {
        const result = await task();
        if (result._tag === 'Left') {
          return result;
        }
        results.push(result.right);
      }
      return Either.right(results);
    },

  sequenceParallel:
    <L, R>(list: TaskEither<L, R>[]): TaskEither<L, R[]> =>
    async () => {
      const results = await Promise.all(list.map((t) => t()));

      const successes: R[] = [];
      for (const r of results) {
        if (r._tag === 'Left') {
          return r;
        }
        successes.push(r.right);
      }
      return Either.right(successes);
    },

  traverse: <L, R, N>(
    list: R[],
    f: (a: R) => TaskEither<L, N>,
  ): TaskEither<L, N[]> => TaskEither.sequence(list.map(f)),

  fromEither:
    <L, R>(f: Either<L, R>): TaskEither<L, R> =>
    async () =>
      f,

  fromNullable:
    <L, R>(error: L) =>
    (a: R | null | undefined): TaskEither<L, R> =>
    async () =>
      Either.fromNullable<L, R>(error)(a),

  fromPredicate:
    <L, R>(predicate: (a: R) => boolean, onError: (a: R) => L) =>
    (a: R): TaskEither<L, R> =>
    async () =>
      Either.fromPredicate<L, R>(predicate, onError)(a),

  filter:
    <L, R>(predicate: (a: R) => boolean, onError: (a: R) => L) =>
    (ma: TaskEither<L, R>): TaskEither<L, R> =>
    async () => {
      const e = await ma();
      return Either.filter<L, R>(predicate, onError)(e);
    },
};
