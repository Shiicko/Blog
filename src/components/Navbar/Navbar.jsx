/* eslint-disable no-unused-vars */
import { redirect, useNavigate } from "react-router";
import * as s from "./NavbarStyles";
import { MainBtn } from "../button/MainBtn";

export const Navbar = (props) => {
  let userState = localStorage.getItem("isLogged");
  const navigate = useNavigate();

  const logout = () => {
    userState = localStorage.setItem("isLogged", false);

    navigate("/Login");
  };

  return (
    <s.Container>
      <s.Left style={{ display: "flex", gap: "40px" }}>
        <a href="/">Inicio</a>
        <a href="">Noticias</a>
      </s.Left>
      <s.Center></s.Center>
      <s.Right>
        {userState === "true" ? (
          <s.LoginButton as="button" onClick={logout}>
            Logout
          </s.LoginButton>
        ) : (
          <MainBtn onClick={() => navigate("/Login")}>Login</MainBtn>
        )}
      </s.Right>
    </s.Container>
  );
};
