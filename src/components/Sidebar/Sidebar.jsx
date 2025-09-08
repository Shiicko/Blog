/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { MainBtn } from "../btn/MainBtn";
import * as s from "./SidebarStyles";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

export const Sidebar = ({ countPosts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <s.container>
      <s.HamburgerButton className={isOpen ? "open" : ""} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </s.HamburgerButton>

      <s.Menu isOpen={isOpen}>
        <s.CloseButton onClick={toggleMenu}>X</s.CloseButton>
        <s.Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg" />
        <s.Username>{user?.username}</s.Username>
        <s.Subtitle>Físico teórico</s.Subtitle>

        <s.Stats>
          <p>Posts: {countPosts}</p>
          <p>Seguidores: 120</p>
          <p>Siguiendo: 87</p>
        </s.Stats>

        <MainBtn onClick={() => Navigate("/perfil")}>Perfil</MainBtn>
      </s.Menu>
    </s.container>
  );
};
