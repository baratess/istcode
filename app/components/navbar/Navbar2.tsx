import Icons from "./Icons";
import Logo from "./Logo";

const Navbar2 = () => {
  return (
    <header className="border-b border-gray-700 bg-gray-800 ">
      <div className="hidden md:flex items-center justify-column gap-3 md:gap-10 px-3 md:px-20 h-[120px]">
        <Icons />
        <Logo />
      </div>
    </header>
  );
};

export default Navbar2;
