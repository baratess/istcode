"use client";

import Blogs from "./Blogs";
import Home from "./Home";
import Menü from "./Menü";
import Search from "./Search";
import User from "./User";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-4">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg animate-fadeIn">
          <Link href="/">
            <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-200 text-7xl shadow-lg">
              İstcode
            </h1>
          </Link>
        </div>

        <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg h-[120px] ml-[300px] rounded-md mr-4">
          <div>
            <Menü />
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center gap-6">
            <Home />
            <Blogs />
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Search />
            <User />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
