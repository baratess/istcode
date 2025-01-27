import React from "react";

const About = () => {
  return (
    <div className="px-4 md:px-10 py-8 flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 animate-fadeIn">
      <div className="p-6 rounded-lg shadow-2xl bg-slate-200 w-full max-w-[700px] h-auto border-blue-200 border-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 mt-10 pt-5 text-center">
          HAKKIMIZDA
        </h1>

        <div className="mt-10 text-center px-5 sm:px-10">
          <p className="text-xl text-gray-600 py-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            quod nobis vitae voluptatum sed, facere accusantium odit, magnam,
            perferendis quos eius neque mollitia odio iste iusto quidem. Animi,
            aliquid quas!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
