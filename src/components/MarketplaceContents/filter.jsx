import React, { useState } from "react";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Filter = ({ filterContent, filterStyles }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const Category = filterContent.ByCategory;
  const Price = filterContent.ByPrice;
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

        <ul className="mt-6">
          {open &&
            Category?.map((category, index) => (
              <li key={index} className="flex items-center gap-2 mb-3">
                <input type="checkbox" />
                {category}
              </li>
            ))}
        </ul>
      </div>

      <div className="mt-10">
        <h3
          className="flex items-center gap-4 cursor-pointer text-xl font-bold"
          onClick={handleOpen}
        >
          By Price {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </h3>

        <ul className="mt-6">
          {open &&
            Price?.map((price, index) => (
              <li key={index} className="flex items-center gap-2 mb-3">
                <input type="checkbox" />
                {price}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
