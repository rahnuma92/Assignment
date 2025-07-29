import React from "react";
import { Link } from "react-router-dom";
import ReactionBar from "./ReactionBar";

const dummyComments = [
  {
    id: 2,
    author: "User01",
    authorId: 2,
    date: "28 July 2025",
    text: "Tried this recipe last night — so easy and delicious!",
  },
  {
    id: 3,
    author: "FoodieFan",
    authorId: 3,
    date: "28 July 2025",
    text: "Added some mushrooms and it turned out amazing!",
  },
];

const CommentBox = () => {
  return (
    <div style={{ 
      marginTop: "24px",
      background: "#f0f9ff",
      padding: "20px",
      borderRadius: "12px",
      border: "1px solid #bae6fd"
    }}>
      {dummyComments.map((comment) => (
        <div
          key={comment.id}
          style={{
            background: "white",
            padding: "16px",
            borderRadius: "8px",
            marginBottom: "16px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            borderLeft: "4px solid #38bdf8"
          }}
        >
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            fontSize: "14px",
            marginBottom: "8px"
          }}>
            <strong>
              <Link
                to={`/author/${comment.authorId}`}
                style={{ 
                  color: "#075985",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                {comment.author}
              </Link>
            </strong>
            <span style={{ color: "#64748b" }}>{comment.date}</span>
          </div>
          <p style={{ 
            margin: 0, 
            fontSize: "15px", 
            color: "#334155",
            lineHeight: 1.5
          }}>
            {comment.text}
          </p>
          <ReactionBar />
        </div>
      ))}
    </div>
  );
};

export default CommentBox;