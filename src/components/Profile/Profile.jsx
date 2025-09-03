/* eslint-disable no-unused-vars */
import * as s from "./profileStlyes";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

export const Profile = ({ posts }) => {
  const { user } = useContext(AuthContext);

  return (
    <s.container>
      {posts &&
        posts.map((post) => (
          <s.card key={post.id}>
            <s.name>{user?.username}</s.name>
            <s.avatar src={post.avatar} />
            <s.statsMain>
              <s.stats>
                <span>12 publicaciones</span>
                <span>47 likes</span>
              </s.stats>
            </s.statsMain>
          </s.card>
        ))}
    </s.container>
  );
};
