/* eslint-disable no-unused-vars */
import { useState } from "react";
import { MainBtn } from "../button/MainBtn";
import { Profile } from "../Profile/Profile";
import * as s from "./SidebarStyles";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const postsData = [
    {
      autor: "Paul Dirac",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg",
    },
  ];

  return (
    <s.container>
      <s.content>
        <s.Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg" />
        <s.Username>Paul Dirac</s.Username>
        <s.Subtitle>Físico teórico</s.Subtitle>

        <s.Stats>
          <p>Posteos: 8</p>
          <p>Seguidores: 120</p>
          <p>Siguiendo: 87</p>
        </s.Stats>
        {isOpen && <Profile posts={postsData} />}
        <MainBtn onClick={toggleMenu}>
          {isOpen ? "Cerrar" : "Ver mi perfil"}
        </MainBtn>
      </s.content>
    </s.container>
  );
};
