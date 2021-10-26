import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type User = {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
};

type AuthContextData = {
  user: User | null;
  signInUrl: string;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProviderProps = {
  children: ReactNode;
};

type AuthResponse = {
  token: string;
  user: {
    id: string;
    name: string;
    avatar_url: string;
    login: string;
  };
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const clientId = 'a28f0898decabfe10c15';
  const oauthUrl = 'https://github.com/login/oauth/authorize';
  const signInUrl = `${oauthUrl}?scope=user&client_id=${clientId}`;

  async function signIn(gitHubCode: string) {
    const response = await api.post<AuthResponse>('authenticate', {
      code: gitHubCode,
    });

    const { token, user } = response.data;

    localStorage.setItem('@dowhile:token', token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setUser(user);
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  }

  useEffect(() => {
    const token = localStorage.getItem('@dowhile:token');

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      api.get<User>('profile').then((response) => {
        setUser(response.data);
      });
    }
  }, []);

  useEffect(() => {
    const { href } = window.location;
    const hasGithubCode = href.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, gitHubCode] = href.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);
      signIn(gitHubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
