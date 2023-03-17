import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

export function Login() {
  const context = useContext(AuthContext);

  function handleLogin() {
    context.Login();
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
