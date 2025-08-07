/* eslint-disable no-unused-vars */
import * as s from "./PostStyles";

export const Posts = ({ posts }) => {
  const postRender = posts.map((post) => {
    return (
      <s.card key={post.id}>
        <s.header>
          <s.avatar src={post.avatar} alt="avatar" />
          <div>
            <s.username>{post.autor}</s.username>
            <s.date>{post.fecha}</s.date>
          </div>
        </s.header>
        {post.imagen && <s.image src={post.imagen} alt="imagen del post" />}
        <s.content>
          <h3>{post.titulo}</h3>
          <p>{post.contenido}</p>
        </s.content>
        <s.footer>
          <s.tipButton>Enviar propina</s.tipButton>
        </s.footer>
      </s.card>
    );
  });

  return (
    <s.container>
      <s.cardContainer>{postRender}</s.cardContainer>
    </s.container>
  );
};
