import { FaRegComments } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Btn from "../btn/Btn";

export const Comment = ({ postId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [comments, setComments] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleComment = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("commentsByPost")) || {};
    setCommentList(stored[postId] || []);
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comments) return alert("No escribiste nada");

    const newComment = { text: comments };
    const updatedCommentList = [...commentList, newComment];
    setCommentList(updatedCommentList);

    const stored = JSON.parse(localStorage.getItem("commentsByPost")) || {};
    stored[postId] = updatedCommentList;
    localStorage.setItem("commentsByPost", JSON.stringify(stored));

    setComments("");
    setIsOpen(false);
  };

  const comentariosDeEstePost = commentList;

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
