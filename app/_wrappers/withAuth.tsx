"use client"

import React, { ComponentType, useEffect, useContext } from 'react';
import { AuthContext } from '../_contexts/auth';

const withAuth = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const user = useContext(AuthContext);
    return <WrappedComponent {...props} {...user} />;
  };

  return WithAuth;
};

export default withAuth;
