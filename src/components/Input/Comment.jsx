import { FaRegComments } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { useState } from "react";

export const Comment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState("");

  const handleComment = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comentario enviado", comments);
    setComments("");
    setIsOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex", gap: "30px" }}>
        <AiOutlineLike size={30} />
        {!isOpen ? (
          <FaRegComments size={30} onClick={handleComment} />
        ) : (
          <form
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            onSubmit={handleSubmit}
          >
            <input
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Escribe un comentario"
            ></input>
            <button
              type="submit"
              style={{ backgroundColor: "#161b22", cursor: "pointer" }}
            >
              ⬆️
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
// <FaRegComments onClick={handleComment}  />
