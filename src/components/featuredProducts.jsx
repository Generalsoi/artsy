import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/products.json";

    const getFeaturedProducts = async () => {
      try {
        await axios
          .get(URL)
          .then((res) => setFeaturedProducts(res.data.featured_products));
      } catch (err) {
        console.log(err);
      }
    };
    getFeaturedProducts();
    console.log(featuredProducts);
  });

  return (
    <div className="mt-6 md:px-20">
      <h1 className="font-bold md:text-3xl mb-4">Featured Products</h1>
      <hr className="py-6" />

      <div>
        <span className="md:flex items-start h-80 gap-5">
          <img
            className="h-60 md:w-[70%]"
            src={featuredProducts[0].url}
            alt={featuredProducts[0].id}
          />
          <span>
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </span>
        </span>
        <hr className="py-6" />
        <span className="md:flex items-start h-80 gap-5">
          <span>
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </span>
          <img
            className="h-60 md:w-[70%]"
            src={featuredProducts[1].url}
            alt={featuredProducts[1].id}
          />
        </span>
        <hr className="py-6" />
        <span className="md:flex items-start h-80 gap-5">
          <img
            className="h-60 md:w-[70%]"
            src={featuredProducts[2].url}
            alt={featuredProducts[2].id}
          />
          <span>
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <span>
              <AiOutlineArrowRight />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};
