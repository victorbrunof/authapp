import { createContext } from 'react';

export const AuthContext = createContext({});

export function AuthProvider({ children }: any) {
  return (
    <AuthContext.Provider value={{ signed: true }}>
      {children}
    </AuthContext.Provider>
  );
}
