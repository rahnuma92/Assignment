import React from "react";
import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";

const HomePage = () => {
  return (
    <div style={{ maxWidth: "700px", margin: "0 auto", padding: "20px", fontFamily: "Arial" }}>
      <h1>Spaghetti Aglio e Olio</h1>
      <p style={{ color: "#555" }}>
        By <Link to="/author/1" style={{ color: "#007bff", textDecoration: "none" }}>Chef Maria</Link> · 28 July 2025
      </p>
      <p style={{ marginTop: "20px", lineHeight: "1.6", color: "#333" }}>
        Spaghetti Aglio e Olio is one of the simplest and tastiest Italian dishes. All you need is spaghetti,
        garlic, olive oil, chili flakes, and parsley. Cook pasta al dente, sauté garlic in olive oil, mix with
        pasta and herbs. Ready in 15 minutes!
      </p>

      <ReactionBar />

      <h2 style={{ marginTop: "40px" }}>Comments</h2>
      <CommentBox />
      <Pagination />
    </div>
  );
};

export default HomePage;
