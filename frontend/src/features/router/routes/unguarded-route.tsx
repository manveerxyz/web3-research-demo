import React, { ReactElement } from 'react';
import {
  Navigate, useLocation,
} from 'react-router-dom';

export type PropTypes = {
  isAuthenticated: boolean;
  authenticatedPath: string;
  children: ReactElement;
};

const UnguardedRoute = ({
  isAuthenticated,
  authenticatedPath,
  children,
}: PropTypes) => {
  const location = useLocation();

  if (isAuthenticated) {
    return <Navigate to={authenticatedPath} state={{ from: location }} replace />;
  }
  return children;
};

export default UnguardedRoute;
