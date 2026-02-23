import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  console.log(post)
  return (
    <Link to={`/post/${post.$id}`}>
      <div
        className="
          w-full bg-white
          border border-gray-300
          rounded-2xl
          overflow-hidden
          transition
          hover:shadow-md
          hover:-translate-y-0.5
        "
      >
        {/* Image */}
        <div className="w-full">
          <img
            src={appwriteService.getFileView(post.featuredImage)}
            alt={post.title}
            className="w-full h-44 object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 space-y-1 flex justify-between items-center">
          {/* Title */}
          <h2
            className="
              text-base font-semibold text-gray-900
              leading-snug
              line-clamp-2
              hover:text-background-color
            "
          >
            {post.title}
          </h2>

          {/* Date */}
          <p className="text-xs text-gray-500">
            {new Date(post.$createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;