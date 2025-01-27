import { CiSearch } from "react-icons/ci";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import dummy from "../../../utils/dummy.json";

const Search = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState(dummy);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setQuery("");
      setFilteredPosts(dummy);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (!searchQuery) {
      setFilteredPosts(dummy);
    } else {
      const filtered = dummy.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const handlePostClick = (postId: string, postCategory: string) => {
    setIsSearchOpen(false);
    setQuery("");
    router.push(`/blogs/${postCategory}/${postId}`);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
        setQuery("");
        setFilteredPosts(dummy);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className="flex justify-end cursor-pointer pr-3"
        onClick={handleSearchToggle}
      >
        <CiSearch size={30} />
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10" />
      )}

      {isSearchOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20">
          <div
            ref={searchRef}
            className="bg-gray-400 p-6 rounded-lg shadow-lg w-11/12 sm:w-1/3 max-w-lg relative"
          >
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-1 right-2 text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Başlığa göre ara..."
              className="w-full px-3 py-4 border bg-slate-600 border-gray-300 rounded mb-4 mt-4"
            />
            {query && (
              <div className="max-h-64 overflow-y-auto">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-black bg-slate-300 p-2 rounded shadow-md mb-2 cursor-pointer"
                      onClick={() => handlePostClick(post.id, post.category)}
                    >
                      <h2 className="text-lg font-bold text-gray-800">
                        {post.title}
                      </h2>
                      <div className="mt-2 text-gray-700">
                        <p>{post.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Aradığınız başlık bulunamadı.</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
