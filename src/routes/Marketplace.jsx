import React from "react";
import { ArtMarketplace } from "../components/MarketplaceContents/artMarketplace";
import { Filter } from "../components/MarketplaceContents/filter";
import { SearchMktPlace } from "../components/MarketplaceContents/searchMktPlace";
import { Navbar } from "./../components/Navbar";

export const Marketplace = () => {
  const filterStyles = [];
  return (
    <>
      <Navbar />
      <SearchMktPlace />
      <div className="md:flex">
        <Filter filterStyles={filterStyles} />
        <ArtMarketplace />
      </div>
    </>
  );
};
