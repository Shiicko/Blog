/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { MainBtn } from "../btn/MainBtn";
import { Profile } from "../Profile/Profile";
import * as s from "./SidebarStyles";
import { AuthContext } from "../../context/AuthContext";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);

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
        <s.Username>{user?.username}</s.Username>
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
