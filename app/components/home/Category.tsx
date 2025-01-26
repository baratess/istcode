﻿"use client";

import { useRouter } from "next/navigation";
import dummy from "../../../utils/dummy.json";

const Category = () => {
  const uniqueCategories = [...new Set(dummy.map((post) => post.category))];
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    router.push(`/blogs/${category}`);
  };

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto ">
      {uniqueCategories.map((category, index) => (
        <div
          className="border font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 rounded-full min-w-[100px] w-[200px] flex items-center justify-center cursor-pointer px-2 py-1 text-center hover:scale-105 transform transition duration-200"
          key={index}
          onClick={() => handleCategoryClick(category)}
        >
          {category.toLocaleUpperCase("tr")}
        </div>
      ))}
    </div>
  );
};

export default Category;
