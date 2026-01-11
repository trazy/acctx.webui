import { Either } from './either';

export type Validation<E, A> = Either<Array<E>, A>;

export const Validation = {
  success: <A, E = never>(a: A): Validation<E, A> => Either.right(a),
  failure: <E, A = never>(e: E): Validation<E, A> => Either.left([e]),

  ap:
    <E, A, B>(fab: Validation<E, (a: A) => B>) =>
    (fa: Validation<E, A>): Validation<E, B> => {
      if (Either.isRight(fab)) {
        return Either.isRight(fa) ? Either.right(fab.right(fa.right)) : fa;
      }

      return Either.isRight(fa) ? fab : Either.left([...fab.left, ...fa.left]);
    },
};
