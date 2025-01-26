import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Icons = () => {
  return (
    <div className="hidden md:flex gap-3 relative cursor-pointer text-red-400 ">
      <Link href={"https://www.youtube.com/channel/UCPwIL9T5o63o7-X4pI5x_4A"}>
        <FaYoutube size={25} />
      </Link>
      <Link href={"https://www.instagram.com/istcode/"}>
        <FaInstagram size={25} />
      </Link>
      <Link href={"https://x.com/istcodecom"}>
        <FaXTwitter size={25} />
      </Link>
      <Link href={"https://www.facebook.com/istcode/"}>
        <FaFacebook size={25} />
      </Link>
    </div>
  );
};

export default Icons;
