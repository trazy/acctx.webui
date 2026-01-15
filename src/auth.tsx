import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import type { User } from './schemas/auth/user';
import { apiUserGetMe } from './api/user';
import { pipe } from './lib/fp/func';
import { Either } from './lib/fp/either';

export type AuthContextType =
  | {
      isAuthenticated: true;
      user: User;
      loading: boolean;
    }
  | {
      isAuthenticated: false;
      user: null;
      loading: boolean;
    };

const AuthContext = createContext<AuthContextType | undefined>({
  isAuthenticated: false,
  user: null,
  loading: false,
});

export function AuthProvider({ children }: PropsWithChildren<{}>) {
  const [state, setState] = useState<{
    loading: boolean;
    user: User | null;
  }>({ loading: true, user: null });

  useEffect(() => {
    // 초기 세션 확인
    apiUserGetMe().then(
      pipe(
        Either.fold(
          (error) => {
            console.error(error);
            setState({ loading: false, user: null });
          },
          (user) => setState({ loading: false, user: user }),
        ),
      ),
    );
  }, []);

  return (
    <AuthContext.Provider
      value={
        !state.user
          ? {
              isAuthenticated: false,
              user: null,
              loading: state.loading,
            }
          : {
              isAuthenticated: true,
              user: state.user,
              loading: state.loading,
            }
      }
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
