import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Btn = ({ postId }) => {
  const { user } = useContext(AuthContext);
  const userId = user?.username || "guest";

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const stored = JSON.parse(localStorage.getItem("likesByPost")) || {};
    const postData = stored[postId] || { likes: 0, usersLiked: [] };

    setLikes(postData.likes);
    setIsLiked(postData.usersLiked?.includes(userId) || false);
  }, [postId, userId]);

  const handleLike = () => {
    const stored = JSON.parse(localStorage.getItem("likesByPost")) || {};
    if (!stored[postId]) stored[postId] = { likes: 0, usersLiked: [] };

    const usersLiked = new Set(stored[postId].usersLiked);
    let newLikes = stored[postId].likes;
    let newIsLiked = isLiked;

    if (usersLiked.has(userId)) {
      usersLiked.delete(userId);
      newLikes -= 1;
      newIsLiked = false;
    } else {
      usersLiked.add(userId);
      newLikes += 1;
      newIsLiked = true;
    }

    stored[postId] = { likes: newLikes, usersLiked: Array.from(usersLiked) };
    localStorage.setItem("likesByPost", JSON.stringify(stored));

    setLikes(newLikes);
    setIsLiked(newIsLiked);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
      <button
        style={{
          border: "0",
          backgroundColor: "transparent",
          fontSize: "25px",
          cursor: "pointer",
          padding: "0",
        }}
        onClick={handleLike}
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
      <span>{likes}</span>
    </div>
  );
};

export default Btn;
