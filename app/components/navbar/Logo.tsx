import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex px-[66vh] items-center justify-center bg-gray-800 ">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 hover:scale-105 transform transition duration-200">
        <Link href={"/"}>İstcode</Link>
      </h1>
    </div>
  );
};

export default Logo;
