import Blogs from "./Blogs";
import Home from "./Home";
import Menü from "./Menü";
import Search from "./Search";
import User from "./User";

const Navbar1 = () => {
  return (
    <div className="flex items-center h-[120px] px-3 text-black text-2xl shadow-2xl md:px-10 bg-gray-800">
      <div className="right-side flex items-center gap-3 text-white">
        <Menü />
      </div>

      <div className="middle flex-grow flex items-center justify-center gap-2">
        <Home />
        <Blogs />
      </div>

      <div className="left-side flex items-center gap-3 ml-auto text-white">
        <Search />
        <User />
      </div>
    </div>
  );
};

export default Navbar1;
