import React, { useState } from "react";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setCurrentPage(i + 1)}
          style={{
            margin: "0 5px",
            padding: "5px 12px",
            background: currentPage === i + 1 ? "#007bff" : "#eee",
            color: currentPage === i + 1 ? "white" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
