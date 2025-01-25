import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex px-[65vh] rounded-md text-lg md:text-2xl cursor-pointer mt-16">
      <Image src={"/istcode.jpeg"} alt="#" width={200} height={200} />
    </div>
  );
};

export default Logo;
