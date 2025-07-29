import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      margin: "40px 0",
      gap: "8px",
      background: "#f5f3ff",  
      padding: "16px",
      borderRadius: "12px"
    }}>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            padding: "8px 16px",
            background: currentPage === i + 1 ? "#4f46e5" : "#e0e7ff", 
            color: currentPage === i + 1 ? "white" : "#4f46e5",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "all 0.2s ease",
            fontWeight: currentPage === i + 1 ? 600 : 500
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;