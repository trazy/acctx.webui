import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/sign-in')({
  component: SignInPage,
  async beforeLoad({ context: { auth } }) {
    if (auth.isAuthenticated) {
      throw redirect({ to: `/` })
    }
  },
})

function SignInPage() {
  return (
    <div className="flex items-center justify-center gap-4 h-screen bg-texton-bg text-texton-text transition-colors">
      <div>
        <img className="w-72 rounded-2xl" src={`/logo-full-vertical.png`} />
      </div>
      <hr className="border-l-4 border-l-texton-muted h-80" />
      <div>
        <form></form>
      </div>
    </div>
  )
}
