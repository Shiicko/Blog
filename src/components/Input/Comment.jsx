import { FaRegComments } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Btn from "../btn/Btn";

export const Comment = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [commentList, setCommentList] = useState([]);
  // const [liked, setLiked] = useState(false);

  const handleComment = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comments === "") {
      alert("No escribiste nada");
    } else {
      setCommentList([...commentList, { postId, text: comments }]);
      setComments("");
      setIsOpen(false);
    }
  };
  const comentariosDeEstePost = commentList.filter((c) => c.postId === postId);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
        <Btn />
        {!isOpen ? (
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <FaRegComments size={30} onClick={handleComment} />
            <span style={{ fontSize: "14px" }}>
              {comentariosDeEstePost.length}
            </span>
          </div>
        ) : (
          <form
            style={{ display: "flex", alignItems: "center", gap: "5px" }}
            onSubmit={handleSubmit}
          >
            <input
              style={{ cursor: "pointer" }}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Escribe un comentario"
            />
            <button
              type="submit"
              style={{ backgroundColor: "#161b22", cursor: "pointer" }}
            >
              ⬆️
            </button>
          </form>
        )}
      </div>

      {comentariosDeEstePost.map((c, i) => (
        <p
          key={i}
          style={{
            margin: "2px 0",
            padding: "5px 10px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            fontSize: "14px",
            maxWidth: "300px",
            wordWrap: "break-word",
          }}
        >
          {c.text}
        </p>
      ))}
    </div>
  );
};

{
  /* <FaHeart
          size={30}
          style={{
            cursor: "pointer",
            color: liked ? "red" : "black",
            transition: "color 0.3s ease",
          }}
          onClick={() => setLiked(!liked)}
        /> */
}
