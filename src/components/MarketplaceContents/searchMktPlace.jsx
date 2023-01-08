import React from "react";
import SearchIcon from "../../assets/images/searchbg.png";

export const SearchMktPlace = () => {
  return (
    <div className="mt-24 px-4 md:px-20 py-6 md:py-10 font-satoshi md:flex md:items-center">
      <span className="md:w-[20%]">
        <span className="relative md:w-[70%] h-10 flex items-center justify-center rounded-xl bg-[#F4F2F2] ">
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[100%] bg-transparent pl-10 focus:rounded-xl focus:border-2 focus:border-[#000000]"
          />
          <img
            src={SearchIcon}
            alt="searchicon"
            className="absolute left-4 w-[9%]"
          />
        </span>
      </span>
      <span
        className="md:flex items-center justify-between py-3 md:px-10 h-16 w-full bg-white rounded-xl"
        style={{ boxShadow: "4px 4px 64px rgba(0, 0, 0, 0.1)" }}
      >
        <p>See 1-6 of 15 results</p>
        <select
          name="sort-options"
          id="sort-options"
          className="md:h-10 w-fit px-4 font-bold rounded-xl cursor-pointer"
        >
          <option value="">Sort by</option>
          <option value="amount">Amount</option>
          <option value="name">Name</option>
        </select>
      </span>
    </div>
  );
};
