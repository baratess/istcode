const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 h-[60px]">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2025 Tüm Hakları Saklıdır</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Hakkımızda
          </a>
          <a href="#" className="hover:underline">
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
