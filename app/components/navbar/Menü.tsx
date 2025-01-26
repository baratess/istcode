"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menü = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex px-10 cursor-pointer">
      <RxHamburgerMenu size={25} onClick={toggleMenu} />

      {isOpen && (
        <div
          ref={menuRef}
          className={
            "absolute top-10 left-0 bg-gray-800 border border-gray-500 shadow-md p-8 rounded-lg min-w-[200px] min-h-[150px] w-[300px] h-[400px] transition-all duration-300 ease-in-out "
          }
        >
          <ul>
            <li className="py-4 pl-6 flex items-center hover:bg-slate-600 rounded-lg text-white">
              Sanat
            </li>
            <li className="py-4 pl-6  flex items-center hover:bg-slate-600 rounded-lg text-white">
              Bilim
            </li>
            <li className="py-4 pl-6 flex items-center hover:bg-slate-600 rounded-lg text-white">
              Teknoloji
            </li>
            <li className="py-4 pl-6 flex items-center hover:bg-slate-600 rounded-lg text-white">
              Felsefe
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menü;
