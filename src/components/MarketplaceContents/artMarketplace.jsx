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

  return (
    <div className="md:flex items-center flex-wrap justify-between gap-5 w-[100%] p-4 md:p-10 font-satoshi">
      {products.map((product, index) => (
        <div
          key={index}
          className="md:w-[24%] md:h-[26rem] p-4 mb-6 rounded-xl"
          style={{ boxShadow: "0px 34px 68px rgba(217, 225, 244, 0.36)" }}
        >
          <img
            src={product?.url}
            alt={product?.name}
            className="md:h-72 w-full rounded-xl object-cover"
          />
          <p className="uppercase mt-2">{product?.name}</p>
          <h3 className="font-extrabold md:text-xl mt-4">{`$${product.price.usd}`}</h3>
        </div>
      ))}
    </div>
  );
};
