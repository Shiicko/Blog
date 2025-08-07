/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { FormPost } from "../../components/Input/FormPost";
import { Rsidebar } from "../../components/Sidebar/Rsidebar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Posts } from "../Posts/Posts";
import { mockPosts } from "../../data/mockPosts";
import * as s from "./HomeStyles";

export const Home = () => {
  const [posts, setPosts] = useState(mockPosts);

  const uploadPost = (newPost) => {
    const postConId = {
      ...newPost,
      id: crypto.randomUUID(),
      fecha: "7 ago 2025", //new Date().toLocaleDateString("es-AR"),
      autor: "Paul Dirac",
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg",
    };

    setPosts([postConId, ...posts]);
  };

  return (
    <s.wrapper>
      <Sidebar />
      <Rsidebar />
      <s.content>
        <Card />
        <h1>Posts más recientes</h1>
        <FormPost onSubmit={uploadPost} />
        <Posts posts={posts} />
      </s.content>
    </s.wrapper>
  );
};
