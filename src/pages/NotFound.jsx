import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">

        {/* 404 */}
        <h1 className="text-7xl font-extrabold text-background-color">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="
              inline-flex items-center gap-2
              px-4 py-2
              text-sm font-medium
              text-gray-700
              border border-gray-300
              rounded-lg
              hover:bg-gray-100
            "
          >
            <ArrowLeft size={16} />
            Go back
          </button>

          <button
            onClick={() => navigate("/")}
            className="
              px-4 py-2
              text-sm font-medium
              bg-background-color
              text-white
              rounded-lg
              hover:opacity-90
            "
          >
            Go to Home
          </button>
        </div>

      </div>
    </div>
  );
}

export default NotFound;