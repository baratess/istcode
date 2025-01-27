﻿"use client";

import Blogs from "./Blogs";
import Menü from "./Menü";
import Search from "./Search";
import User from "./User";
import Link from "next/link";
import AboutUs from "./AboutUs";

const Navbar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-10 animate-fadeIn">
      <div className="relative">
        <header className="flex items-center justify-between px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-white shadow-lg h-[120px] rounded-md max-w-screen-xl w-full mx-auto">
          <div className="flex items-center gap-6 w-full sm:w-auto">
            <Menü />
            <div className="text-2xl font-extrabold flex-grow sm:flex-grow-0 text-center sm:text-left">
              <Link href="/">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-200 text-4xl">
                  İstcode
                </h1>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-grow items-center justify-center gap-6">
            <Blogs />
            <AboutUs />
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <Search />
            <User />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
