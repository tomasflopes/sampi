import React, { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({ signed: false });

export const AuthProvider = ({ children }) => {
  const [signed, setSigned] = useState(false);
  const [hasGroup, setHasGroup] = useState(false);

  function SignIn() {
    setSigned(true);
  }

  function SignOut() {
    setSigned(false);
  }

  function UserHasGroup() {
    setHasGroup(true);
  }

  function UserDoesNotHaveGroup() {
    setHasGroup(false);
  }

  return (
    <AuthContext.Provider value={{ signed, SignIn, SignOut, hasGroup, UserHasGroup, UserDoesNotHaveGroup }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
