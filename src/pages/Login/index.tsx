import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export function Login() {
  const context = useContext(AuthContext);
  console.log(context);
  function handleLogin() {}

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
