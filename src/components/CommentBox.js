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
    <div style={{ marginTop: "10px" }}>
      {dummyComments.map((comment) => (
        <div
          key={comment.id}
          style={{
            background: "#f9f9f9",
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "15px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}>
            <strong>
              <Link
                to={`/author/${comment.authorId}`}
                style={{ color: "#007bff", textDecoration: "none" }}
              >
                {comment.author}
              </Link>
            </strong>
            <span style={{ color: "#888" }}>{comment.date}</span>
          </div>
          <p style={{ margin: "8px 0", fontSize: "15px" }}>{comment.text}</p>
          <ReactionBar />
        </div>
      ))}
    </div>
  );
};

export default CommentBox;
