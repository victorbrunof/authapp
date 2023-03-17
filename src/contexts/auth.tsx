import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { api } from '../services/axios';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(): Promise<void>;
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
    });
    setUser(response.data.user);
    api.defaults.headers.Authorization = `Baerer ${response.data.token}`;
  }
  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
      {children}
    </AuthContext.Provider>
  );
}
