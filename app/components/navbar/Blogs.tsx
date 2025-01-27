import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex px-14 cursor-pointer ">
      <h1 className="text-3xl md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-400 hover:scale-105 transform transition duration-200">
        <Link href={"/blogs"}>BLOGLAR</Link>
      </h1>
    </div>
  );
};

export default Blogs;
