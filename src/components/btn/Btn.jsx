import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        style={{
          border: "0",
          backgroundColor: "transparent",
          fontSize: "25px",
          padding: "0",
        }}
        onClick={handleLike}
      >
        {isLiked ? "❤️" : "🤍"}
      </button>
      <span style={{ margin: "5px" }}>
        {likes} {likes === 1 ? "" : ""}
      </span>
    </div>
  );
};

export default LikeButton;
