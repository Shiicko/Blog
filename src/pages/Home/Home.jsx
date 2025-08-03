/* eslint-disable no-unused-vars */
import { FormPost } from "../../components/Input/FormPost";
import { Rsidebar } from "../../components/Sidebar/Rsidebar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Posts } from "../Posts/Posts";
import * as s from "./HomeStyles";

export const Home = () => {
  return (
    <s.wrapper>
      <Sidebar />
      <Rsidebar />

      <s.content>
        <h1>Posts mas recientes</h1>
        <FormPost />
        <Posts />
      </s.content>
    </s.wrapper>
  );
};
