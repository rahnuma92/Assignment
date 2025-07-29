import React from "react";
import { Link } from "react-router-dom";
import ReactionBar from "../components/ReactionBar";
import CommentBox from "../components/CommentBox";
import Pagination from "../components/Pagination";

const HomePage = () => {
  return (
    <div style={{ 
      maxWidth: "700px", 
      margin: "40px auto", 
      padding: "40px 24px", 
      fontFamily: "'Inter', sans-serif",
      background: "#fff7ed",  
      borderRadius: "12px",
      border: "1px solid #fed7aa"
    }}>
      <h1 style={{ 
        color: "#c2410c",  
        fontSize: "32px",
        marginBottom: "8px"
      }}>
        Spaghetti Aglio e Olio
      </h1>
      <p style={{ 
        color: "#9a3412",
        marginBottom: "24px"
      }}>
        By <Link 
          to="/author/1" 
          style={{ 
            color: "#ea580c", 
            textDecoration: "none",
            fontWeight: 600
          }}>
          Chef Maria
        </Link> · 28 July 2025
      </p>
      <p style={{ 
        marginTop: "20px", 
        lineHeight: "1.7", 
        color: "#431407",
        fontSize: "16px"
      }}>
        Spaghetti Aglio e Olio is one of the simplest and tastiest Italian dishes...
      </p>

      <ReactionBar />
      <CommentBox />
      <Pagination />
    </div>
  );
};

export default HomePage;