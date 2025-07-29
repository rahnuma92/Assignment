import React from "react";
import { useParams } from "react-router-dom";

// Dummy author data mapped by ID
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
  const { id } = useParams(); // This gets the :id from the URL
  const author = authorDetails[id]; // Match it with dummy data

  if (!author) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>Author Not Found</h2>
        <p>This author profile does not exist.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial" }}>
      <h2>{author.name}</h2>
      <p><strong>ID:</strong> {id}</p>
      <p>{author.bio}</p>
    </div>
  );
};

export default AuthorProfile;
