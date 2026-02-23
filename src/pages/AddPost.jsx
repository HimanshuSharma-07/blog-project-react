import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <button
          onClick={() => navigate(-1)}
          className="
    mb-4
    inline-flex items-center gap-2
    text-sm font-medium text-gray-600
    hover:text-background-color
    cursor-pointer
  "
        >
          ← Back
        </button>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPost;
