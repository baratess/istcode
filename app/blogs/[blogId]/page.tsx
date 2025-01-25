"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dummy from "../../../utils/dummy.json";

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

  useEffect(() => {
    if (blogId) {
      const selectedPost = dummy.find((post) => post.id === blogId);
      if (selectedPost) {
        setPost(selectedPost);
      } else {
        setPost(null);
      }
    }
    setLoading(false);
  }, [blogId]);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (!post) {
    return <div>Blog bulunamadı.</div>;
  }

  return (
    <div className="px-4 md:px-10 py-8">
      <div className="border border-gray-500 p-6 rounded-lg shadow-md bg-slate-100">
        <h2 className="text-3xl font-bold text-gray-800">{post.title}</h2>
        <h3 className="text-base font-semibold text-gray-600 mt-2">
          Kategori: {post.category.toLocaleUpperCase("tr")}
        </h3>
        <div className="mt-4 text-gray-700">
          <p>{post.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
