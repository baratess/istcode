import Image from "next/image";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col md:flex-row items-center mb-10 md:mb-20 mt-5">
        <div className="order-2 md:order-1 md:w-1/2 text-center md:text-right p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Bilim Hakkında Blog Yazıları
          </h2>
          <p className="text-gray-600">
            Bilim hakkında yazılmış blog yazılarını görmek için{" "}
            <a href="#" className="text-blue-400">
              tıklayınız.
            </a>
          </p>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center p-5">
          <a href="#">
            <Image
              src="/Bilim.jpg"
              alt="Fotoğraf 1"
              className="rounded-lg shadow-lg w-full md:w-3/4 object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-10 md:mb-20">
        <div className="order-1 md:order-1 md:w-1/2 flex justify-center p-5">
          <a href="#">
            <Image
              src="/felsefe.jpg"
              alt="Fotoğraf 2"
              className="rounded-lg shadow-lg w-full md:w-3/4 object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </a>
        </div>
        <div className="order-2 md:order-2 md:w-1/2 text-center md:text-left p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Felsefe Hakkında Blog Yazıları
          </h2>
          <p className="text-gray-600">
            Felsefe hakkında yazılmış blog yazılarını görmek için{" "}
            <a href="#" className="text-blue-400">
              tıklayınız.
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-10 md:mb-20">
        <div className="order-2 md:order-1 md:w-1/2 text-center md:text-right p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Sanat Hakkında Blog Yazıları
          </h2>
          <p className="text-gray-600">
            Sanat hakkında yazılmış blog yazılarını görmek için{" "}
            <a href="#" className="text-blue-400">
              tıklayınız.
            </a>
          </p>
        </div>
        <div className="order-1 md:order-2 md:w-1/2 flex justify-center p-5">
          <a href="#">
            <Image
              src="/sanat.jpeg"
              alt="Fotoğraf 3"
              className="rounded-lg shadow-lg w-full md:w-3/4 object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="order-1 md:order-1 md:w-1/2 flex justify-center p-5">
          <a href="#">
            {" "}
            <Image
              src="/teknoloji.jpg"
              alt="Fotoğraf 4"
              className="rounded-lg shadow-lg w-full md:w-3/4 object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </a>
        </div>
        <div className="order-2 md:order-2 md:w-1/2 text-center md:text-left p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Teknoloji Hakkında Blog Yazıları
          </h2>
          <p className="text-gray-600">
            Teknoloji hakkında yazılmış blog yazılarını görmek için{" "}
            <a href="#" className="text-blue-400">
              tıklayınız.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
