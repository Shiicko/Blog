/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const user = { active: true };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
