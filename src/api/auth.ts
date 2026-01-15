import { Either } from '@/lib/fp/either';
import { pipe } from '@/lib/fp/func';
import { TaskEither } from '@/lib/fp/task-either';

export enum ApiErrorType {
  AUTH_ERROR = 'AUTH_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN',
}

export type ApiError =
  | { type: ApiErrorType.AUTH_ERROR; message: string }
  | { type: ApiErrorType.SERVER_ERROR; status: number }
  | { type: ApiErrorType.UNKNOWN; message: string };

const getAccessToken = (): TaskEither<ApiError, string> =>
  pipe(
    localStorage.getItem('ACCTX_JWT_ACCESS_TOKEN'),
    Either.fromNullable<ApiError, string>({
      type: ApiErrorType.AUTH_ERROR,
      message: 'No access token found',
    }),
    TaskEither.fromEither,
  );

const doFetch = (url: string, options: RequestInit, accessToken: string) =>
  TaskEither.tryCatch(
    () =>
      fetch(url, {
        ...options,
        headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
      }),
    (error): ApiError => ({
      type: ApiErrorType.UNKNOWN,
      message: String(error),
    }),
  );

const refreshAccessToken = (): TaskEither<ApiError, Response> =>
  pipe(
    TaskEither.tryCatch(
      () =>
        fetch('/api/v1/auth/refresh-token', {
          method: 'POST',
          credentials: 'include',
        }),
      (error): ApiError => ({
        type: ApiErrorType.UNKNOWN,
        message: `could not fetch refresh access token: ${error}`,
      }),
    ),
    TaskEither.chain((res) =>
      res.ok
        ? TaskEither.right(res)
        : TaskEither.left<ApiError>({
            type: ApiErrorType.AUTH_ERROR,
            message: `Failed to refresh access token: ${res.statusText}`,
          }),
    ),
  );

export const secureFetch = <T>(
  url: string,
  options: RequestInit = {},
): TaskEither<ApiError, T> =>
  pipe(
    getAccessToken(),
    TaskEither.chain((accessToken) => doFetch(url, options, accessToken)),
    TaskEither.chain((res) => {
      if (!res.ok) {
        return TaskEither.tryCatch(
          () => res.json() as Promise<T>,
          (): ApiError => ({
            type: ApiErrorType.SERVER_ERROR,
            status: res.status,
          }),
        );
      }

      if (res.status === 401) {
        return pipe(
          refreshAccessToken(),
          TaskEither.mapLeft(
            (): ApiError => ({
              type: ApiErrorType.AUTH_ERROR,
              message: 'refresh access token failed',
            }),
          ),
          TaskEither.chain(() => secureFetch<T>(url, options)),
        );
      }

      return TaskEither.left<ApiError, T>({
        type: ApiErrorType.SERVER_ERROR,
        status: res.status,
      });
    }),
  );

export const apiAuthSignIn = (params: {
  email: string;
  password: string;
}): TaskEither<ApiError, Response> =>
  pipe(
    TaskEither.tryCatch(
      () =>
        fetch('/api/v1/auth/sign-in', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
          credentials: 'include',
        }),
      (error): ApiError => ({
        type: ApiErrorType.UNKNOWN,
        message: `could not fetch sign-in: ${error}`,
      }),
    ),
    TaskEither.chain((res) =>
      !res.ok
        ? TaskEither.left<ApiError>({
            type: ApiErrorType.SERVER_ERROR,
            status: res.status,
          })
        : TaskEither.right(res),
    ),
  );
