import React from "react";
import { Navbar } from "../components/Navbar";
import { HomePageContents } from "../helpers/HomePageContents";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <HomePageContents />
    </>
  );
};
