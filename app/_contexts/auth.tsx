import React, { createContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { ARCHETYPE } from '../_types';

interface AuthContextProps {
  email: string | null,
  id: string | null,
  handle: string | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
  archetype: ARCHETYPE | null,
  isAuthenticated: boolean,
  setUserUnauthenticated: () => void,
  setUserAuthenticated: () => void,
}

export const AuthContext = createContext<AuthContextProps>({
  username: null,
  email: null,
  handle: null,
  id: null,
  firstName: null,
  lastName: null,
  archetype: null,
  isAuthenticated: false,
  setUserUnauthenticated: () => { },
  setUserAuthenticated: () => { },
});

export const AuthProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [handle, setHandle] = useState<string | null>(null);
  const [archetype, setArchetype] = useState<ARCHETYPE | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const setUserUnauthenticated = () => {
    setIsAuthenticated(false);
    resetUser();
  }

  const setUserAuthenticated = () => {
    setIsAuthenticated(true);
  }

  const resetUser = () => {
    setUsername(null);
    setEmail(null);
    setHandle(null);
    setArchetype(null);
    setId(null);
    setFirstName(null);
    setLastName(null);
  }

  useEffect(() => {
    if (!username) {
      fetch('/user', { credentials: 'include' })
        .then((res) => {
          if (!res.ok) {
            setUserUnauthenticated();
            throw new Error('Failed to fetch user');
          }
          return res.json()
        })
        .then((data) => {
          const { user } = data;
          setUsername(user.username);
          setEmail(user.email);
          setHandle(user.handle);
          setArchetype(user.archetype);
          setId(user.id);
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setIsAuthenticated(true);
        })
        .catch((err) => console.log(err))
    }
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      email,
      id,
      handle,
      username,
      firstName,
      lastName,
      archetype,
      setUserUnauthenticated,
      setUserAuthenticated,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
