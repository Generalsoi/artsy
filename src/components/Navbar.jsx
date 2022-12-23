import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";

export const Navbar = () => {
  let navLinks = [
    { name: "Home", link: "/" },
    { name: "Marketplace", link: "/marketplace" },
    { name: "Auction", link: "/auctions" },
    { name: "Drop", link: "/drop" },
  ];

  const activeLink = " border border-x-0 border-t-0 border-b-4 border-b-black";
  const normalLink = "";

  return (
    <div className="w-[100%]">
      <div className="w-full md:flex justify-between items-center md:px-20 py-8 fixed">
        <span>
          <h1 className="uppercase font-extrabold font-stix text-2xl">
            artsy.
          </h1>
        </span>

        <ul className="md:flex gap-8 md:items-center transition-all duration-500 ease-in">
          {navLinks.map((navLink, index) => (
            <NavLink
              to={navLink.link}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <li key={index} className="text-md ">
                {navLink.name}
              </li>
            </NavLink>
          ))}
        </ul>

        <span className="md:flex md:items-center gap-5">
          <BsSearch className="font-extrabold text-xl cursor-pointer" />
          <BsCart className="font-extrabold text-xl cursor-pointer" />
          <GrNotification className="font-extrabold text-xl cursor-pointer" />
        </span>
      </div>
    </div>
  );
};
