import React from "react";
import { ArtMarketplace } from "../components/MarketplaceContents/artMarketplace";
import { Filter } from "../components/MarketplaceContents/filter";
import { SearchMktPlace } from "../components/MarketplaceContents/searchMktPlace";
import { Navbar } from "./../components/Navbar";

export const Marketplace = () => {
  const filterContent = {
    ByCategory: ["Editorials", "Fashion", "Optics", "Art & Museum", "Nature"],

    ByPrice: [
      "Below $100.00",
      "$100.00 - $150.00",
      "$150.00 - $200.00",
      "Above $200.00",
    ],

    "By Artist": [],
    "Collection Year": [],
  };

  const filterStyles = `hidden md:block md:w-[15%] font-satoshi`;
  return (
    <>
      <Navbar />
      <SearchMktPlace />
      <div className="md:flex items-start md:gap-8 px-4 md:px-20 py-6 md:py-10">
        <Filter filterContent={filterContent} filterStyles={filterStyles} />
        <ArtMarketplace />
      </div>
    </>
  );
};
