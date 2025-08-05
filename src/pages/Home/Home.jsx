/* eslint-disable no-unused-vars */
import { Card } from "../../components/Card/Card";
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
        <Card />
        <h1>Posts mas recientes</h1>
        <FormPost />
        <Posts />
      </s.content>
    </s.wrapper>
  );
};
