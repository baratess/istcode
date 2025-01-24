import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="hidden md:flex gap-3 relative cursor-pointer ">
      <FaFacebook size={25} />
      <FaInstagram size={25} />
      <FaXTwitter size={25} />
      <FaYoutube size={25} />
    </div>
  );
};

export default Icons;
