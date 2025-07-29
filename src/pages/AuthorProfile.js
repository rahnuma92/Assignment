import React from "react";
import { useParams } from "react-router-dom";

const authorDetails = {
  1: {
    name: "Chef Maria",
    bio: "Maria is a passionate home chef who loves simple, authentic Italian recipes.",
  },
  2: {
    name: "User01",
    bio: "User01 is an enthusiastic food lover exploring easy and quick recipes at home.",
  },
  3: {
    name: "FoodieFan",
    bio: "FoodieFan is a spice enthusiast who adds a personal twist to every dish!",
  },
};

const AuthorProfile = () => {
  const { id } = useParams();
  const author = authorDetails[id];

  if (!author) {
    return (
      <div style={{ 
        padding: "40px", 
        fontFamily: "'Inter', sans-serif",
        textAlign: "center",
        background: "#fee2e2",  // Light red error section
        borderRadius: "12px"
      }}>
        <h2 style={{ color: "#b91c1c" }}>Author Not Found</h2>
        <p style={{ color: "#7f1d1d" }}>This author profile does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: "40px 24px", 
      maxWidth: "600px", 
      margin: "0 auto", 
      fontFamily: "'Inter', sans-serif",
      background: "#ecfdf5",  
      borderRadius: "12px",
      border: "1px solid #a7f3d0"
    }}>
      <h2 style={{ 
        color: "#047857", 
        fontSize: "28px",
        marginBottom: "16px"
      }}>
        {author.name}
      </h2>
      <p style={{ 
        color: "#064e3b",
        marginBottom: "24px"
      }}>
        <strong>ID:</strong> {id}
      </p>
      <p style={{ 
        color: "#065f46",
        lineHeight: 1.6,
        fontSize: "16px"
      }}>
        {author.bio}
      </p>
    </div>
  );
};

export default AuthorProfile;