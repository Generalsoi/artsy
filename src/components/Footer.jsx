import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="px-4 md:px-20 py-8 md:py-10">
      <div className="md:flex items-center justify-between">
        <h1 className="font-clashdisplay md:text-4xl hidden md:block">
          ARTSY.
        </h1>
        <span className="hidden md:block">
          <ul>
            <Link to="/">
              <li className="mb-6 text-xl">Home</li>
            </Link>
            <Link to="/marketplace">
              <li className="mb-6 text-xl">Marketplace</li>
            </Link>
            <Link to="/auctions">
              <li className="mb-6 text-xl">Auctions</li>
            </Link>
            <Link to="/drop">
              <li className="mb-6 text-xl">Drops</li>
            </Link>
          </ul>
        </span>
        <span className="hidden md:block">
          <ul>
            <li className="mb-6 text-xl">Blog</li>
            <li className="mb-6 text-xl">Wallets</li>
            <li className="mb-6 text-xl">Rates</li>
            <li className="mb-6 text-xl">High Bids</li>
          </ul>
        </span>
        <span>
          <p className="flex items-center gap-3 mb-5">
            <AiOutlineMail className="md:text-3xl font-bold" />{" "}
            artsystudios@gmail.com
          </p>
          <p className="flex items-center gap-3">
            <GoLocation className="md:text-3xl font-bold" /> Lagos, Nigeria
          </p>
        </span>
      </div>
      <span className="mt-8 flex items-center justify-center font-rubik opacity-60">
        <p>Artsystudios © 2023. All Rights Reserved.</p>
      </span>
    </div>
  );
};
