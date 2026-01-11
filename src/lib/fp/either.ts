import { Option } from './option';

export enum EitherType {
  Left = 'Left',
  Right = 'Right',
}

export type Left<L> = { readonly _tag: EitherType.Left; readonly left: L };

export type Right<R> = { readonly _tag: EitherType.Right; readonly right: R };

export type Either<L, R> = Left<L> | Right<R>;

export const Either = {
  left: <L>(left: L): Left<L> => ({
    _tag: EitherType.Left,
    left: left,
  }),

  right: <R>(right: R): Right<R> => ({
    _tag: EitherType.Right,
    right: right,
  }),

  isLeft: <L, R>(either: Either<L, R>) => either._tag === EitherType.Left,

  isRight: <L, R>(either: Either<L, R>) => either._tag === EitherType.Right,

  map:
    <R, N>(f: (a: R) => N) =>
    <L>(ma: Either<L, R>): Either<L, N> =>
      Either.isLeft(ma) ? ma : Either.right(f(ma.right)),

  chain:
    <L, R, N>(f: (a: R) => Either<L, N>) =>
    (ma: Either<L, R>): Either<L, N> =>
      Either.isLeft(ma) ? ma : f(ma.right),

  mapLeft:
    <L, N>(f: (e: L) => N) =>
    <R>(ma: Either<L, R>): Either<N, R> =>
      Either.isLeft(ma) ? Either.left(f(ma.left)) : ma,

  orElse:
    <E, A, G>(f: (e: E) => Either<G, A>) =>
    (ma: Either<E, A>): Either<G, A> =>
      Either.isLeft(ma) ? f(ma.left) : ma,

  orElseRight:
    <E, A>(f: (e: E) => A) =>
    (ma: Either<E, A>): Either<never, A> =>
      Either.isLeft(ma) ? Either.right(f(ma.left)) : (ma as Either<never, A>),

  getOrElse:
    <E, A>(onLeft: (e: E) => A) =>
    (ma: Either<E, A>): A =>
      Either.isLeft(ma) ? onLeft(ma.left) : ma.right,

  bimap:
    <E, G, A, B>(f: (e: E) => G, g: (a: A) => B) =>
    (ma: Either<E, A>): Either<G, B> =>
      Either.isLeft(ma) ? Either.left(f(ma.left)) : Either.right(g(ma.right)),

  fold:
    <E, A, B>(onLeft: (e: E) => B, onRight: (a: A) => B) =>
    (ma: Either<E, A>): B =>
      Either.isLeft(ma) ? onLeft(ma.left) : onRight(ma.right),

  fromOption:
    <E>(onNone: () => E) =>
    <A>(ma: Option<A>): Either<E, A> =>
      ma._tag === 'None' ? Either.left(onNone()) : Either.right(ma.value),

  fromNullable:
    <L, R>(error: L) =>
    (value: R | null | undefined) =>
      value === null || value === undefined
        ? Either.left(error)
        : Either.right(value),

  fromPredicate:
    <L, R>(predicate: (a: R) => boolean, onError: (a: R) => L) =>
    (a: R): Either<L, R> =>
      predicate(a) ? Either.right(a) : Either.left(onError(a)),

  filter:
    <L, R>(predicate: (a: R) => boolean, onError: (a: R) => L) =>
    (ma: Either<L, R>): Either<L, R> => {
      if (Either.isLeft(ma)) {
        return ma;
      }
      if (predicate(ma.right)) {
        return ma;
      }
      return Either.left(onError(ma.right));
    },
};
