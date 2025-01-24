// "use client"
"use client";

import { usePathname } from "next/navigation";

const Home = () => {
  const pathname = usePathname();

  const handleHomeClick = () => {
    const newUrl = `${pathname}`;
    window.location.href = newUrl;
  };
  return (
    <div className="flex px-6 cursor-pointer" onClick={handleHomeClick}>
      ANASAYFA
    </div>
  );
};

export default Home;
