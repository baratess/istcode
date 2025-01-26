import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-20">
      <div className="flex w-full px-5 gap-8 mb-16">
        <div className="flex flex-col items-center w-1/2 ml-10">
          <a href="/blogs/felsefe">
            <Image
              src="/felsefe.jpg"
              alt="Felsefe"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105"
              width={400}
              height={300}
            />
          </a>
          <div className="text-white text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-yellow-300">Felsefe: </span>Düşüncelerin
            derinliklerine inen blog yazılarını keşfedin.
          </div>

          <a href="/blogs/sanat">
            <Image
              src="/sanat.jpeg"
              alt="Sanat"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-20"
              width={400}
              height={300}
            />
          </a>
          <div className="text-white text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-red-200">Sanat:</span> Yaratıcılığın
            sınırlarını zorlayan blog yazılarını keşfedin.
          </div>
        </div>

        <div className="flex flex-col items-center w-1/2 mr-10">
          <a href="/blogs/bilim">
            <Image
              src="/Bilim.jpg"
              alt="Bilim"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-10"
              width={400}
              height={300}
            />
          </a>
          <div className="text-white text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-green-400">Bilim:</span> Evreni anlamak için
            yazılmış blog yazılarını keşfedin.
          </div>

          <a href="/blogs/teknoloji">
            <Image
              src="/teknoloji.jpg"
              alt="Teknoloji"
              className="rounded-lg shadow-2xl w-full object-cover transform transition duration-300 hover:scale-105 mt-28"
              width={400}
              height={300}
            />
          </a>
          <div className="text-white text-xl font-semibold text-center p-5 bg-gray-500 bg-opacity-50 rounded-lg shadow-lg mt-10">
            <span className="text-blue-200">Teknoloji:</span> Geleceği
            şekillendiren inovasyonlar hakkında yazılmış blog yazılarını
            keşfedin.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
