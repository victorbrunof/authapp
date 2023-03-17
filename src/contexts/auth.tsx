import { createContext, useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { api } from '../services/axios';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
  Logout(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<object | null>(null);

  async function Login() {
    const response = await api.post('/logins', {
      id: uuid(),
      email: 'example@email.com',
      password: '123456',
      token: uuid(),
    });
    setUser(response.data);
    api.defaults.headers.Authorization = `Baerer ${response.data.token}`;
    localStorage.setItem('@App:user', JSON.stringify(response.data.email));
    localStorage.setItem('@App:user', JSON.stringify(response.data.token));
  }

  function Logout() {
    setUser(null);

    sessionStorage.removeItem('@App:user');
    sessionStorage.removeItem('@App:token');
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem('@App:user');
    const storagedToken = localStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
