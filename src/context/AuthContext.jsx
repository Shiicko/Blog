/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    const storedUser = localStorage.getItem("user");

    if (isLogged && storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
