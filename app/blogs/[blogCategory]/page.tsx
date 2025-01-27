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

const BlogCategory: React.FC = () => {
  const { blogCategory } = useParams();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  console.log(blogCategory);

  const getBackgroundImage = (blogCategory: string) => {
    switch (blogCategory.toLowerCase()) {
      case "felsefe":
        return "/felsefe2.jpg";
      case "teknoloji":
        return "/teknoloji2.jpg";
      case "bilim":
        return "/bilim2.png";
      default:
        return "/sanat.webp";
    }
  };

  useEffect(() => {
    if (blogCategory && !Array.isArray(blogCategory)) {
      const filteredPosts = dummy.filter(
        (post) => post.category === blogCategory
      );
      setPosts(filteredPosts);
    }
  }, [blogCategory]);

  if (posts.length === 0) {
    return (
      <div className="flex justify-center items-center h-[800px] animate-fadeIn">
        Yükleniyor...
      </div>
    );
  }

  return (
    <div className="px-4 md:px-10 py-8 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-4 animate-fadeIn">
      <h1 className="flex justify-center text-3xl font-bold text-white mb-6 mt-3">
        {blogCategory && !Array.isArray(blogCategory)
          ? blogCategory.charAt(0).toLocaleUpperCase("tr") +
            blogCategory.slice(1).toLocaleLowerCase("tr")
          : ""}{" "}
        Kategorisindeki Tüm Blog Yazıları
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border border-gray-500 p-6 rounded-lg shadow-md bg-slate-100"
            style={{
              backgroundImage: `url(${getBackgroundImage(post.category)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
            <h3 className="text-base font-semibold text-gray-600 mt-2">
              Kategori: {post.category.toLocaleUpperCase("tr")}
            </h3>
            <div className="mt-4 text-gray-700">
              <p>{post.description}</p>
            </div>
            <div className="mt-4">
              <a
                href={`/blogs/${post.category}/${post.id}`}
                className="text-blue-500 hover:underline animate-fadeIn"
              >
                Detayları Gör
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
