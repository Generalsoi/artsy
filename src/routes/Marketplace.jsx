import React from "react";
import { SearchMktPlace } from "../components/MarketplaceContents/searchMktPlace";
import { Navbar } from "./../components/Navbar";

export const Marketplace = () => {
  return (
    <>
      <Navbar />
      <SearchMktPlace />
    </>
  );
};
