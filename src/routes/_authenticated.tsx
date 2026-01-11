import { Either } from '@/lib/fp/either';
import { pipe } from '@/lib/fp/func';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ context, location }) => {
    // 로딩 중이 아닐 때 인증되지 않았다면 로그인 페이지로 리다이렉트
    if (!context.auth.loading && !context.auth.isAuthenticated) {
      const next = pipe(
        location.href,
        Either.fromNullable(new Error('no fallback url')),
        Either.chain((a) =>
          a.trim().length < 1
            ? Either.left(new Error('empty fallback url'))
            : Either.right(a.trim()),
        ),
        Either.map((fallbackUrl) => ({
          to: `/sign-in`,
          search: { redirect: fallbackUrl },
        })),
        Either.getOrElse<Error, { to: string; search?: { redirect: string } }>(
          () => ({ to: `/sign-in` }),
        ),
      );
      throw redirect(next);
    }
  },
});
