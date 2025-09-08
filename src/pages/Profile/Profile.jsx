/* eslint-disable no-unused-vars */
import { useContext } from "react";
import * as s from "./profileStlyes";
import { AuthContext } from "../../Context/AuthContext";

export const Profile = ({ posts }) => {
  const { user } = useContext(AuthContext);
  const userPosts = posts?.filter((post) => post.autor === user?.username);
  return (
    <s.container>
      <s.header>
        <s.avatar
          src={
            user?.avatar ||
            "https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg"
          }
        />
        <s.name>{user?.username}</s.name>
        <s.subtitle>{user?.subtitle || "Usuario de la red social"}</s.subtitle>
        <s.stats>
          <span> Publicaciones</span>
          <span> Likes</span>
          <span>Comentarios</span>
        </s.stats>
      </s.header>
      <s.gallery>
        {userPosts?.map((post) => (
          <s.postCard key={post.id}>
            {post.imagen && <s.postImage src={post.imagen} />}
            <s.postContent>
              <h3>{post.titulo}</h3>
              <p>{post.contenido}</p>
              <s.postDate>{post.fecha}</s.postDate>
            </s.postContent>
          </s.postCard>
        ))}
      </s.gallery>
    </s.container>
  );
};
