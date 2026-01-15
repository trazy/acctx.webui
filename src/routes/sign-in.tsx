import { apiAuthSignIn, ApiErrorType } from '@/api/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Either } from '@/lib/fp/either';
import { pipe } from '@/lib/fp/func';
import { useForm } from '@tanstack/react-form';
import { createFileRoute, redirect } from '@tanstack/react-router';
import { Activity } from 'react';
import { toast } from 'sonner';
import * as z from 'zod';

const signInFormSchema = z.object({
  email: z.email({ message: '이메일 주소의 형식이 올바르지 않습니다.' }),
  password: z
    .string()
    .min(6, { message: '비밀번호는 최소 6자를 입력해야합니다.' })
    .max(64, { message: '비밀번호는 최대 64자를 입력할 수 있습니다.' }),
});

export const Route = createFileRoute('/sign-in')({
  component: SignInPage,
  async beforeLoad({ context: { auth } }) {
    if (auth.isAuthenticated) {
      throw redirect({ to: `/` });
    }
  },
});

function SignInPage() {
  const form = useForm({
    defaultValues: { email: '', password: '' },
    validators: {
      onSubmit: signInFormSchema,
    },
    onSubmit: async ({ value }) => {
      const signInResult = await apiAuthSignIn(value)();
      pipe(
        signInResult,
        Either.fold(
          (error) => {
            toast.error(
              `로그인에 실패했습니다: ${error.type === ApiErrorType.SERVER_ERROR ? `server response ${error.status}` : error.message}`,
            );
          },
          () => {
            redirect({ to: '/' });
          },
        ),
      );
    },
  });
  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display">
      <main className="flex-1 flex items-center justify-center p-6">
        <Card className="w-full max-w-[480px]">
          <CardContent>
            <form
              id="acctx-sign-in-form"
              onSubmit={(e) => {
                e.preventDefault();
                form.handleSubmit();
              }}
            >
              <FieldGroup>
                <form.Field name="email">
                  {(field) =>
                    ((field, isInvalid) => (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>이메일 주소</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="name@company.com"
                          autoComplete="off"
                        />
                        <Activity mode={isInvalid ? 'visible' : 'hidden'}>
                          <FieldError errors={field.state.meta.errors} />
                        </Activity>
                      </Field>
                    ))(
                      field,
                      Boolean(
                        field.state.meta.isTouched && !field.state.meta.isValid,
                      ),
                    )
                  }
                </form.Field>
                <form.Field name="password">
                  {(field) =>
                    ((field, isInvalid) => (
                      <Field data-invalid={isInvalid}>
                        <FieldLabel>비밀번호</FieldLabel>
                        <Input
                          id={field.name}
                          name={field.name}
                          type="password"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          aria-invalid={isInvalid}
                          placeholder="비밀번호를 입력해주세요."
                          autoComplete="off"
                        />
                        <Activity mode={isInvalid ? 'visible' : 'hidden'}>
                          <FieldError errors={field.state.meta.errors} />
                        </Activity>
                      </Field>
                    ))(
                      field,
                      Boolean(
                        field.state.meta.isTouched && !field.state.meta.isValid,
                      ),
                    )
                  }
                </form.Field>
              </FieldGroup>
            </form>
          </CardContent>
          <hr />
          <CardFooter>
            <Field orientation="horizontal" className="justify-end">
              <Button variant="default" type="submit" form="acctx-sign-in-form">
                로그인하기
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
