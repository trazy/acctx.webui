import { Either } from './either';

export type TaskValidation<E, A> = () => Promise<Either<E[], A>>;

export const TaskValidation = {
  success:
    <A, E = never>(a: A): TaskValidation<E, A> =>
    async () =>
      Either.right(a),
  failure:
    <E, A = never>(e: E): TaskValidation<E, A> =>
    async () =>
      Either.left([e]),

  ap:
    <E, A, B>(fab: TaskValidation<E, (a: A) => B>) =>
    (fa: TaskValidation<E, A>): TaskValidation<E, B> =>
    async () => {
      const [eab, ea] = await Promise.all([fab(), fa()]);

      if (Either.isRight(eab)) {
        return Either.isRight(ea) ? Either.right(eab.right(ea.right)) : ea;
      }

      return Either.isRight(ea) ? eab : Either.left([...eab.left, ...ea.left]);
    },
};
