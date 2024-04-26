"use client";

import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchBox = () => {
  const [sticky, setSticky] = useState(false);
  const [search, setSearch] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 250 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div>
      <div
        className={`${
          sticky
            ? "fixed top-16 lg:top-3 shadow-blue-500/20 bg-white shadow-lg lg:shadow-none left-0 right-0 lg:bg-transparent p-3 lg:p-0 lg:left-[20vw] lg:right-[20vw] z-50  sm:mx-0 sm:flex justify-center"
            : "absolute left-0 right-0 w-full px-3 sm:px-6 -bottom-7"
        }`}
      >
        <form
          className={`${
            sticky ? "shadow-none" : "shadow-xl"
          } flex sm:mx-auto bg-white sm:w-[79vw] border-2 border-yellow-400 lg:w-[50vw]`}
        >
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={handleInputChange}
            className="w-full px-2 sm:px-4 text-lg col-span-2 py-3 text-black rounded-none outline-none"
          />
          <button
            type="submit"
            className="px-3 py-3 bg-yellow-400  lg:px-8 font-semibold col-span-1 text-xl"
          >
            <FaSearch className="sm:hidden text-white" />
            <span className="hidden sm:block text-white font-semibold">
              {" "}
              Search
            </span>
          </button>
        </form>
      </div>
      <div className="max-w-7xl  mx-auto my-28 sm:px-5"></div>
    </div>
  );
};

export default SearchBox;
