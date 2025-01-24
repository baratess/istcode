import Blogs from "./Blogs";
import Home from "./Home";
import Menü from "./Menü";
import Search from "./Search";
import User from "./User";

const Navbar1 = () => {
  return (
    <div className="flex items-center h-[120px] px-3 md:px-10 text-black text-2xl border-b border-gray-300">
      {/* Sol grup */}
      <div className="flex items-center gap-3">
        <Menü />
      </div>

      {/* Orta grup */}
      <div className="flex-grow flex items-center justify-center gap-6">
        <Home />
        <Blogs />
      </div>

      {/* Sağ grup */}
      <div className="flex items-center gap-3 ml-auto">
        <Search />
        <User />
      </div>
    </div>
  );
};

export default Navbar1;
