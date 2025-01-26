"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dummy from "../../../../utils/dummy.json";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
}

const BlogDetails: React.FC = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showNotFoundMessage, setShowNotFoundMessage] =
    useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      if (!post) {
        setShowNotFoundMessage(true);
      }
    }, 1000);

    if (blogId) {
      const selectedPost = dummy.find((post) => post.id === blogId);
      if (selectedPost) {
        setPost(selectedPost);
      } else {
        setPost(null);
      }
    }

    return () => clearTimeout(timer);
  }, [blogId, post]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (showNotFoundMessage && !post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Blog bulunamadı.</p>
      </div>
    );
  }

  if (post) {
    return (
      <div className="px-4 md:px-10 py-8 flex justify-center items-center h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600">
        <div className="p-6 rounded-lg shadow-2xl bg-slate-200 w-[700px] h-[720px] border-blue-200 border-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10 pt-5 text-center">
            {post.title}
          </h1>

          <div className="text-gray-700 leading-relaxed mt-5 text-center">
            <p>{post.description}</p>
          </div>

          <div className="mt-20 text-center">
            <p className="text-2xl text-gray-600 p-10 pt-20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              quod nobis vitae voluptatum sed, facere accusantium odit, magnam,
              perferendis quos eius neque mollitia odio iste iusto quidem.
              Animi, aliquid quas!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default BlogDetails;
