/* eslint-disable no-unused-vars */
import { redirect, useNavigate } from "react-router";
import * as s from "./NavbarStyles";
import { MainBtn } from "../button/MainBtn";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export const Navbar = (props) => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <s.Container>
      <s.Left style={{ display: "flex", gap: "40px" }}>
        <a href="/">Inicio</a>
        <a href="">Noticias</a>
      </s.Left>
      <s.Center></s.Center>
      <s.Right>
        {user ? (
          <s.LoginButton as="button" onClick={logout}>
            Logout
          </s.LoginButton>
        ) : (
          <MainBtn onClick={() => navigate("/login")}>Login</MainBtn>
        )}
      </s.Right>
    </s.Container>
  );
};
