"use client";

import React, { Suspense, useState, useEffect } from "react";
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

  const getBackgroundImage = (category: string) => {
    switch (category.toLowerCase()) {
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

  const getTextColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "felsefe":
        return "text-black";
      case "teknoloji":
        return "text-white";
      case "bilim":
        return "text-green-600";
      default:
        return "text-purple-700";
    }
  };

  const getCategoryTextColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "felsefe":
        return "text-black";
      case "teknoloji":
        return "text-white";
      case "bilim":
        return "text-green-600";
      default:
        return "text-purple-700";
    }
  };

  const getDescTextColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "felsefe":
        return "text-black";
      case "teknoloji":
        return "text-white";
      case "bilim":
        return "text-green-600";
      default:
        return "text-purple-700";
    }
  };

  useEffect(() => {
    setVisibleCount(6);

    if (category) {
      const filtered = dummy.filter((post) => post.category === category);
      setFilteredPosts(filtered);
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
            className="border border-gray-500 p-6 rounded-lg shadow-md w-full"
            style={{
              backgroundImage: `url(${getBackgroundImage(post.category)})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2
              className={` text-2xl font-bold ${getTextColor(post.category)}`}
            >
              {post.title.toLocaleUpperCase("tr")}
            </h2>
            <h3
              className={`text-base font-semibold ${getCategoryTextColor(
                post.category
              )} mt-2`}
            >
              Kategori: {post.category.toLocaleUpperCase("tr")}
            </h3>
            <div className={`mt-4 ${getDescTextColor(post.category)}`}>
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

const BlogPageWrapper: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogPage />
    </Suspense>
  );
};

export default BlogPageWrapper;
