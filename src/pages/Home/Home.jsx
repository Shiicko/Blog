/* eslint-disable no-unused-vars */
import { Posts } from "../Posts/Posts";
import * as s from "./HomeStyles";

export const Home = () => {
  return (
    <s.container>
      <s.title>Bienvenidos a mi foro científico</s.title>
      <Posts />
    </s.container>
  );
};
