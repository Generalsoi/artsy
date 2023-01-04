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
    // console.log(featuredProducts);
  }, []);

  return (
    <div className="mt-10 px-4 md:px-20">
      <h1 className="font-bold text-2xl md:text-3xl mb-4">Featured Products</h1>
      <hr className="py-6" />

      <div>
        <span className="md:flex items-start h-80 gap-5">
          <img
            className="h-36 md:h-60 w-full md:w-[70%]"
            src={featuredProducts[0]?.url}
            alt={featuredProducts[0]?.id}
          />
          <span className="flex flex-col md:h-60 items-start justify-between mt-4 md:mt-0">
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="w-full flex items-center justify-end">
              <span className="w-12 h-12 rounded-full flex items-center justify-center border-[#333333] border-2">
                <AiOutlineArrowRight className="text-2xl" />
              </span>
            </div>
          </span>
        </span>
        <hr className="py-6 mt-4 md:mt-0" />
        <span className="flex flex-col-reverse md:flex-row  items-start h-80 gap-5">
          <span className="flex flex-col md:h-60 items-start justify-between mt-4 md:mt-0">
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="w-full flex items-center justify-end">
              <span className="w-12 h-12 rounded-full flex items-center justify-center border-[#333333] border-2">
                <AiOutlineArrowRight className="text-2xl" />
              </span>
            </div>
          </span>
          <img
            className="h-36 md:h-60 w-full md:w-[70%]"
            src={featuredProducts[1]?.url}
            alt={featuredProducts[1]?.id}
          />
        </span>
        <hr className="py-6 mt-4 md:mt-0" />
        <span className="md:flex items-start h-80 gap-5">
          <img
            className="h-36 md:h-60 w-full md:w-[70%]"
            src={featuredProducts[2]?.url}
            alt={featuredProducts[2]?.id}
          />
          <span className="flex flex-col md:h-60 items-start justify-between mt-4 md:mt-0">
            <h2 className="font-bold text-2xl font-stix tracking-wide mb-4">
              The Boolean Egyptian
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="w-full flex items-center justify-end">
              <span className="w-12 h-12 rounded-full flex items-center justify-center border-[#333333] border-2">
                <AiOutlineArrowRight className="text-2xl" />
              </span>
            </div>
          </span>
        </span>
      </div>
    </div>
  );
};
