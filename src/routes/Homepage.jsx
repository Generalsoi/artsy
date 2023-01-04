import React from "react";
import { Navbar } from "../components/Navbar";
import { HomePageContents } from "./../components/HomepageContents/HomePageContents";

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <HomePageContents />
    </>
  );
};
