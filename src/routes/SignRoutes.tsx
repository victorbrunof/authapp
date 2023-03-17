import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../pages/Login';

export function SignRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login} />
      </Routes>
    </BrowserRouter>
  );
}
