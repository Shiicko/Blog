/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { Card } from "../../components/Card/Card";
import { FormPost } from "../../components/Input/FormPost";
import { Rsidebar } from "../../components/Sidebar/Rsidebar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Posts } from "../Posts/Posts";
import { mockPosts } from "../../data/mockPosts";
import { Loader } from "../../components/Loader/Loader";
import * as s from "./HomeStyles";
import { AuthContext } from "../../Context/AuthContext";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("Post"));
      setPosts(saved || mockPosts);
      setIsLoading(false);
    }, 2200);
  }, []);

  const uploadPost = (newPost) => {
    const postConId = {
      ...newPost,
      id: crypto.randomUUID(),
      fecha: new Date().toLocaleDateString("es-AR"),
      autor: `${user.username}`,
      avatar:
        "https://upload.wikimedia.org/wikipedia/commons/8/8a/Paul_Dirac%2C_1933%2C_head_and_shoulders_portrait%2C_bw.jpg",
    };
    const updatedPosts = [postConId, ...posts];
    setPosts(updatedPosts);
    localStorage.setItem("Post", JSON.stringify(updatedPosts));
  };

  if (isLoading) {
    return (
      <s.LoaderWrapper>
        <Loader />
      </s.LoaderWrapper>
    );
  }

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
