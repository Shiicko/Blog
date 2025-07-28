/* eslint-disable no-unused-vars */
import * as s from "./NavbarStyles";

export const Navbar = () => {
  return (
    <s.Container>
      <s.Left>
        <a href="/">Inicio</a>
      </s.Left>
      <s.Center></s.Center>
      <s.Right>
        <s.LoginButton href="/Login">Login</s.LoginButton>
      </s.Right>
    </s.Container>
  );
};
