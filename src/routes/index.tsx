import { SignRoutes } from './SignRoutes';
import { OtherRoutes } from './OtherRoutes';
import { useContext } from 'react';
import { useAuth } from '../contexts/auth';

export function Routes() {
  const { signed } = useAuth();

  return signed ? <OtherRoutes /> : <SignRoutes />;
}
