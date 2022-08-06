import React, { ReactElement } from 'react';
import {
  Navigate, useLocation,
} from 'react-router-dom';

export type GuardedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  children: ReactElement;
};

const GuardedRoute = ({
  isAuthenticated,
  authenticationPath,
  children,
}: GuardedRouteProps) => {
  const location = useLocation();

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to={authenticationPath} state={{ from: location }} replace />;
};

export default GuardedRoute;
