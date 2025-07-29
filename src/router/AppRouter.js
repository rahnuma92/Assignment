import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthorProfile from "../pages/AuthorProfile";

const AppRouter = () => {
  return (
    <Router>
      <div style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",  
        padding: "24px"
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/author/:id" element={<AuthorProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;