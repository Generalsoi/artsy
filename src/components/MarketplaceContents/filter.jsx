import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Filter = ({ filterContent, filterStyles }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const Category = filterContent.ByCategory;
  console.log(Category);

  return (
    <div className={filterStyles}>
      <span className="md:flex items-center gap-4 pb-3 font-extrabold border-l-0 border-t-0 border-r-0 border-b-4 border-[#AFB091]">
        <HiOutlineAdjustmentsHorizontal className="text-4xl" />
        <h2 className="md:text-2xl">Filter</h2>
      </span>

      {/* Implementing the filter content here */}
      <div className="mt-10">
        <h3
          className="flex items-center gap-4 cursor-pointer text-xl font-bold"
          onClick={handleOpen}
        >
          By Category {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h3>

        <ul>{open && Category?.map((category) => <li>{category}</li>)}</ul>
      </div>
    </div>
  );
};
