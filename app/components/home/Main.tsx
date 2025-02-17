﻿"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setTimeout(() => {
      router.push(`/blogs/${category}`);
    }, 700);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-20 animate-fadeIn">
      <div className="flex flex-wrap w-full px-5 gap-8 mb-16 md:flex-nowrap">
        {/* Left Column */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:ml-10">
          <div
            onClick={() => handleCategoryClick("felsefe")}
            className="animate-fadeIn w-full"
          >
            <Image
              src="/felsefe.jpg"
              alt="Felsefe"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </div>
          <div className="text-white text-lg md:text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-yellow-300">Felsefe: </span>Düşüncelerin
            derinliklerine inen blog yazılarını keşfedin.
          </div>

          <div
            onClick={() => handleCategoryClick("sanat")}
            className="animate-fadeIn w-full"
          >
            <Image
              src="/sanat.jpeg"
              alt="Sanat"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-10 md:mt-20"
              width={400}
              height={300}
            />
          </div>
          <div className="text-white text-lg md:text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-red-200">Sanat:</span> Yaratıcılığın
            sınırlarını zorlayan blog yazılarını keşfedin.
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center w-full md:w-1/2 md:mr-10">
          <div
            onClick={() => handleCategoryClick("bilim")}
            className="animate-fadeIn w-full"
          >
            <Image
              src="/Bilim.jpg"
              alt="Bilim"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-10"
              width={400}
              height={300}
            />
          </div>
          <div className="text-white text-lg md:text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-green-400">Bilim:</span> Evreni anlamak için
            yazılmış blog yazılarını keşfedin.
          </div>

          <div
            onClick={() => handleCategoryClick("teknoloji")}
            className="animate-fadeIn w-full"
          >
            <Image
              src="/teknoloji.jpg"
              alt="Teknoloji"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-10 md:mt-28"
              width={400}
              height={300}
            />
          </div>
          <div className="text-white text-lg md:text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-blue-200">Teknoloji:</span> Geleceği
            şekillendiren inovasyonlar hakkında yazılmış blog yazılarını
            keşfedin.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
