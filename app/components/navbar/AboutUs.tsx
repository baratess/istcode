"use client";

import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="flex px-2 cursor-pointer">
      <h1 className="text-xs-custom md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 hover:scale-105 transform transition duration-200 ">
        <Link href={"/"}>HAKKIMIZDA</Link>
      </h1>
    </div>
  );
};

export default AboutUs;
