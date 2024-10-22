import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(savedUsers);
  }, []);

  const signUp = (newUser) => {
    const updatedUsers = [...users, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const signIn = (email, password) => {
    const storedUser = users.find((user) => user.email === email && user.password === password);
    return storedUser ? storedUser : null;
  };

  return (
    <AuthContext.Provider value={{ users, signUp, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
