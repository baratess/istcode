import Link from "next/link";

const Logo = () => {
  return (
    <div className=" bg-gray-800 md:mx-4 lg:px-40 xl:px-[66vh] ">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-200 ">
        <Link href={"/"}>İstcode</Link>
      </h1>
    </div>
  );
};

export default Logo;
