"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="flex px-6 cursor-pointer">
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        <Link href={"/"}>ANASAYFA</Link>
      </h1>
    </div>
  );
};

export default Home;
