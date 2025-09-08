/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";

export const PostContexts = createContext();

export const PostProvider = ({ children }) => {
  return <PostContexts.Provider>{children}</PostContexts.Provider>;
};
