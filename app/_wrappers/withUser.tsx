"use client"

import React, { ComponentType, useEffect, useContext } from 'react';
import { UserContext } from '../_contexts/user';

const withUser = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithUser = (props: P) => {
    const user = useContext(UserContext);
    return <WrappedComponent {...props} user={user} />;
  };

  return WithUser;
};

export default withUser;
