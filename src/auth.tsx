import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'

export type AuthContextType =
  | {
      isAuthenticated: true
      user: User
      loading: boolean
    }
  | {
      isAuthenticated: false
      user: null
      loading: boolean
    }

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [state, setState] = useState<{
    loading: boolean
    session: Session | null
  }>({ loading: true, session: null })

  useEffect(() => {
    // 초기 세션 확인
    supabase.auth.getSession().then(({ data: { session } }) => {
      setState({ session: session, loading: false })
    })

    // 인증 상태 변경 리스너
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setState((prev) => ({ ...prev, session }))
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={
        !state.session
          ? {
              isAuthenticated: false,
              user: null,
              loading: state.loading,
            }
          : {
              isAuthenticated: true,
              user: state.session.user,
              loading: state.loading,
            }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
