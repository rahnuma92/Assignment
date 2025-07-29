import React, { useState } from "react";

const ReactionBar = () => {
  const reactions = ["👍", "❤️", "😮", "😢"];
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ 
      display: "flex", 
      gap: "16px", 
      marginTop: "12px",
      paddingTop: "12px",
      borderTop: "1px solid #e2e8f0"
    }}>
      {reactions.map((icon, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          style={{
            fontSize: "24px",
            background: selected === index ? "#4f46e5" : "transparent", 
            color: selected === index ? "white" : "inherit", 
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: selected === index ? "none" : "1px solid #d1d5db",
            cursor: "pointer",
            transition: "all 0.2s ease",
            transform: selected === index ? "scale(1.1)" : "scale(1)"
          }}
        >
          {icon}
        </button>
      ))}
    </div>
  );
};

export default ReactionBar;