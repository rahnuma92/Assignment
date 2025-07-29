import React, { useState } from "react";

const ReactionBar = () => {
  const reactions = ["👍", "❤️", "😮", "😢"];
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
      {reactions.map((icon, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          style={{
            fontSize: "20px",
            opacity: selected === index ? 1 : 0.4,
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;
