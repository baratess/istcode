// use-client
const Category = () => {
  const deneme = [
    {
      no: 1,
      name: "a",
    },
    {
      no: 2,
      name: "b",
    },
  ];
  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      {deneme.map((deneme) => (
        <div
          className="border text-slate-500 rounded-full min-w-[100px] flex items-center justify-center cursor-pointer flex-1 px-2 py-1 text-center"
          key={deneme.no}
        >
          {deneme.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
