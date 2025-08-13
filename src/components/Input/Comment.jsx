// import * as s from "./CommentStyles";
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";

export const Comment = () => {
  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
        <FaRegComments size={30} />
        <AiOutlineLike size={30} />
      </div>
    </div>
  );
};
