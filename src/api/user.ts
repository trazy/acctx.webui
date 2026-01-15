import { pipe } from '@/lib/fp/func';
import { TaskEither } from '@/lib/fp/task-either';
import { createUser } from '@/schemas/auth/user';

export const apiUserGetMe = async () => {
  const result = await pipe(
    TaskEither.tryCatch(
      () => fetch('/api/v1/user/me'),
      (error) => new Error(`Failed to fetch user: ${error}`),
    ),
    TaskEither.chain((res) => {
      if (!res.ok) {
        return TaskEither.left(
          new Error(`Failed to fetch user: ${res.statusText}`),
        );
      }
      return TaskEither.tryCatch(
        () => res.json(),
        (error) => new Error(`Invalid JSON: ${error}`),
      );
    }),
    TaskEither.map(createUser),
  )();
  return result;
};
