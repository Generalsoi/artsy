import React, { useEffect, useState } from "react";
import axios from "axios";

export const ArtMarketplace = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json";

    const getProducts = async () => {
      try {
        const response = await axios.get(URL);
        setProducts(response.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, []);
  console.log(products);
  return <div>ArtMarketplace</div>;
};
