import React, { useState, useEffect } from "react";
import { ArtMarketplace } from "../components/MarketplaceContents/artMarketplace";
import { Filter } from "../components/MarketplaceContents/filter";
import { Pagination } from "../components/MarketplaceContents/Pagination";
import { SearchMktPlace } from "../components/MarketplaceContents/searchMktPlace";
import { Navbar } from "./../components/Navbar";
import axios from "axios";
import { categories } from "../api/api";

export const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const [categories, setCategories] = useState([]);

  // const filterContent = {
  //   ByCategory: ["Editorials", "Fashion", "Optics", "Art & Museum", "Nature"],

  //   ByPrice: [
  //     "Below $100.00",
  //     "$100.00 - $150.00",
  //     "$150.00 - $200.00",
  //     "Above $200.00",
  //   ],

  //   "By Artist": [],
  //   "Collection Year": [],
  // };

  const url = "https://ali-express1.p.rapidapi.com/categories";

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://ali-express1.p.rapidapi.com/categories",
      headers: {
        "X-RapidAPI-Key": "a2fefbe490msh3135d35dfdd3becp11d0bfjsn59b4eda78bc4",
        "X-RapidAPI-Host": "ali-express1.p.rapidapi.com",
      },
    };

    const getCategories = async () => {
      try {
        const response = await axios.request(options);
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);

  const filterStyles = `hidden md:block md:w-[15%] font-satoshi`;

  // useEffect(() => {
  //   const URL =
  //     "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json";

  //   const getProducts = async () => {
  //     try {
  //       const response = await axios.get(URL);
  //       setProducts(response.data.products);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   getProducts();
  // }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => {
    currentPage !== 0 && setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Navbar />
      <SearchMktPlace
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        currentPage={currentPage}
      />
      <div className="md:flex items-start md:gap-8 px-4 md:px-20 py-6 md:py-10">
        <Filter categories={categories} filterStyles={filterStyles} />
        <div>
          <ArtMarketplace products={currentProducts} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};
