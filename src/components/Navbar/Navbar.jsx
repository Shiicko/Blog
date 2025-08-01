/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router";
import * as s from "./NavbarStyles";

export const Navbar = () => {
  let userState = localStorage.getItem("isLogged");
  const navigate = useNavigate();

  const logout = () => {
    userState = localStorage.setItem("isLogged", false);

    navigate("/Login");
  };

  return (
    <s.Container>
      <s.Left>
        <a href="/">Inicio</a>
      </s.Left>
      <s.Center></s.Center>
      <s.Right>
        {userState === "true" ? (
          <s.LoginButton as="button" onClick={logout}>
            Logout
          </s.LoginButton>
        ) : (
          <s.LoginButton href="/Login">Login</s.LoginButton>
        )}
      </s.Right>
    </s.Container>
  );
};
