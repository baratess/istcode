import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex px-14 cursor-pointer ">
      <Link href={"/blogs"}>BLOGLAR</Link>
    </div>
  );
};

export default Blogs;
