"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import dummy from "../../../utils/dummy.json";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  category: string;
}

const BlogPage: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(dummy);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    setVisibleCount(6);

    if (category) {
      const filteredCategory = dummy.filter(
        (post) => post.category === category
      );
      setFilteredPosts(filteredCategory);
    } else {
      setFilteredPosts(dummy);
    }
  }, [category]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className="px-4 md:px-10 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {filteredPosts.slice(0, visibleCount).map((post: BlogPost) => (
          <div
            key={post.id}
            className="border border-gray-500 p-6 rounded-lg shadow-md bg-slate-100"
          >
            <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
            <h3 className="text-base font-semibold text-gray-600 mt-2">
              Kategori: {post.category.toLocaleUpperCase("tr")}
            </h3>
            <div className="mt-4 text-gray-700">
              <p>{post.description}</p>
            </div>

            <div className="mt-4">
              <a
                href={`/blogs/${post.category}/${post.id}`}
                className="text-blue-500 hover:underline"
              >
                Detayları Gör
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {visibleCount < filteredPosts.length && (
          <button
            onClick={loadMore}
            className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-500"
          >
            Daha Fazla Göster
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
