"use client";

import React, { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Menü = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(e.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target as Node)
    ) {
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
    <div className="relative flex px-10 cursor-pointer hover:scale-105 transform transition duration-200">
      <div ref={buttonRef}>
        <RxHamburgerMenu
          size={25}
          onClick={toggleMenu}
          className="hamburger-button"
        />
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-10 left-0 bg-gray-800 border border-gray-500 shadow-lg p-6 rounded-lg min-w-[200px] w-[300px] transition-all duration-300 ease-in-out z-50"
        >
          <ul className="space-y-4">
            <a href="/blogs/sanat">
              <li className="py-3 pl-6 flex items-center text-white hover:bg-slate-600 rounded-lg transition-all duration-200">
                Sanat
              </li>
            </a>
            <a href="/blogs/bilim">
              <li className="py-3 pl-6 flex items-center text-white hover:bg-slate-600 rounded-lg transition-all duration-200">
                Bilim
              </li>
            </a>
            <a href="/blogs/teknoloji">
              {" "}
              <li className="py-3 pl-6 flex items-center text-white hover:bg-slate-600 rounded-lg transition-all duration-200">
                Teknoloji
              </li>
            </a>
            <a href="/blogs/felsefe">
              {" "}
              <li className="py-3 pl-6 flex items-center text-white hover:bg-slate-600 rounded-lg transition-all duration-200">
                Felsefe
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Menü;
