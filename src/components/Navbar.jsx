import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart, BsChatLeftFill } from "react-icons/bs";
import { GrNotification, GrClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  let navLinks = [
    { name: "Home", link: "/" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "Auction", link: "/auctions" },
    { name: "Drop", link: "/drop" },
  ];

  const activeLink = " border border-x-0 border-t-0 border-b-4 border-b-black";
  const normalLink = "";

  const handleClick = () => {
    setOpen(!open);
    if (open) {
      window.document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  return (
    <div className={`w-[100%] relative `}>
      <div
        className={`w-full flex justify-between items-center ${
          open
            ? "pl-4 backdrop-blur-lg h-screen "
            : "pl-[40%] backdrop-filter-none "
        } pr-4 md:px-20 py-8 fixed top-0 z-20 `}
      >
        <span
          className={`md:hidden text-3xl font-extrabold absolute top-6 ${
            open ? "right-4" : "  left-4"
          } transition-all duration-300`}
          onClick={handleClick}
        >
          {open ? <GrClose /> : <RxHamburgerMenu />}
        </span>
        <span>
          <h1
            className={`uppercase font-[800] font-stix text-2xl ${
              open ? "absolute top-7 text-3xl" : ""
            }`}
          >
            artsy.
          </h1>
        </span>

        <ul
          className={`${
            open ? "block h-[70%]  " : "hidden h-0"
          } absolute md:static top-20 left-4 md:flex gap-8 md:items-center transition-all duration-500 ease-in font-satoshi`}
        >
          {navLinks.map((navLink, index) => (
            <NavLink
              key={index}
              to={navLink.link}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li className="text-2xl md:text-lg mt-4 mb-6 mx-0 md:m-0 ">
                {navLink.name}
              </li>
            </NavLink>
          ))}
        </ul>

        <span
          className={`${
            open ? "block" : "hidden"
          } bg-[#3341C1] h-16 w-16 flex items-center justify-center rounded-full absolute right-4 top-96`}
        >
          <BsChatLeftFill className="text-white text-2xl" />
        </span>

        <span
          className={`${
            open ? "hidden" : "block"
          } flex items-center gap-2 md:gap-5`}
        >
          <BsSearch className="font-extrabold text-xl cursor-pointer" />
          <BsCart className="font-extrabold text-xl cursor-pointer" />
          <GrNotification className="font-extrabold text-xl cursor-pointer hidden md:block" />
        </span>
      </div>
    </div>
  );
};
