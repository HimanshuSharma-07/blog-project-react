import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { ArrowLeft, CircleArrowLeft } from "lucide-react";



export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  const [isAuthor, setIsAuthor] = useState(false)

  const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);

  // Redirect if not logged in
  useEffect(() => {
    if (!authStatus) {
      navigate("/login");
    }
  }, [authStatus, navigate]);

  useEffect(() => {
  if (post && userData) {
    setIsAuthor(post.userId === userData.$id);
  }
}, [post, userData]);

  // Fetch post
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  // Delete post
  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="w-full py-6 bg-gray-50">
      <Container>
        {/* Back Button */}
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
          <CircleArrowLeft />
        </button>

        <div className="max-w-4xl mx-auto px-4 md:px-6 py-8">

  {/* Title + Meta */}
  <div className="mb-6 flex justify-between items-center">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
      {post.title}
    </h1>

    <p className="mt-2 text-sm text-gray-500">
      {new Date(post.$createdAt).toLocaleDateString()}
    </p>
  </div>

  {/* Featured Image */}
  <div className="w-full mb-8 relative">
    <img
      src={appwriteService.getFileView(post.featuredImage)}
      alt={post.title}
      className="
        w-full
        max-h-120
        object-contain
        bg-gray-100
        rounded-xl
      "
    />

    {isAuthor && (
      <div className="absolute right-4 top-4 flex gap-2">
        <Link to={`/edit-post/${post.$id}`}>
          <Button className="px-3 py-1 text-xs bg-background-color/90 text-gray-800 border-none">
            Edit
          </Button>
        </Link>
        <Button
          onClick={deletePost}
          className="px-3 py-1 text-xs bg-red-500/90 text-white border-none"
        >
          Delete
        </Button>
      </div>
    )}
  </div>

  {/* Content */}
  <div
  className="
    text-gray-800
    bg-white
    px-6 md:px-10 py-8
    rounded-xl
    leading-relaxed
    text-[16px]
    border border-gray-200
  "
>
  {parse(post.content)}
</div>

</div>

      </Container>
    </div>
  ) : null;
}