import Category from "../components/home/Category";
import Products from "../components/home/Products";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 pt-10 m-0 p-0 animate-fadeIn">
      <Category />
      <Products />
    </div>
  );
};

export default Blog;
