"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 h-[50px]">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6 sm:px-0">
        <p className="text-center sm:text-left mb-2 sm:mb-0">
          &copy; 2025 Tüm Hakları Saklıdır
        </p>
        <div className="flex gap-4 justify-center sm:justify-end">
          <a href="#" className="hover:underline">
            Hakkımızda
          </a>
          <a href="https://www.istcode.com/en/" className="hover:underline">
            İletişim
          </a>
          <a href="#" className="hover:underline">
            Gizlilik
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
