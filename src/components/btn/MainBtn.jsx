/* eslint-disable no-unused-vars */
import * as s from "./btnStyles";

export const MainBtn = ({ children, ...props }) => {
  return <s.button {...props}>{children}</s.button>;
};
