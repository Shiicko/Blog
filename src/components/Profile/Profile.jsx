/* eslint-disable no-unused-vars */
import React from "react";
import * as s from "./profileStlyes";

export const Profile = ({ posts }) => {
  return (
    <s.container>
      {posts &&
        posts.map((post) => (
          <s.card key={post.id}>
            <s.name>{post.autor}</s.name>
            <s.avatar>🖥️</s.avatar>
            <s.stats>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>12 publicaciones</span>
                <span>47 likes</span>
              </div>
            </s.stats>
          </s.card>
        ))}
    </s.container>
  );
};
