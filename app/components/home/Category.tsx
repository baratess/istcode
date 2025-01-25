"use client";

import { usePathname, useSearchParams } from "next/navigation";
import dummy from "../../../utils/dummy.json";

const Category = () => {
  const uniqueCategories = [...new Set(dummy.map((post) => post.category))];
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleCategoryClick = (category: string) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("category", category);
    const newUrl = `${pathname}?${newParams.toString()}`;
    window.location.href = newUrl;
  };

  return (
    <div className="flex items-center justify-center px-3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto mt-7">
      {uniqueCategories.map((category, index) => (
        <div
          className="border text-slate-500 rounded-full min-w-[100px] w-[200px] flex items-center justify-center cursor-pointer px-2 py-1 text-center hover:bg-slate-200"
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
