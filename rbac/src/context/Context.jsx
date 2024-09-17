import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const changerole =(newrole) =>{
  setUser ((prevUser)=> ({...prevUser, role:newrole}));
  }

  return (
    <AuthContext.Provider value={{ user, login, logout,changerole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);