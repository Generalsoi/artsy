import React from "react";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { FeaturedProducts } from "./featuredProducts";
import { imageList } from "./../../helpers/homePageImgList";
import { AuctionAndExhibition } from "./auctionAndExhibition";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TopCreators } from "./topCreators";
import { Footer } from "../Footer";

export const HomePageContents = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-20 font-satoshi">
      <div className="w-[100%] py-6">
        <h1 className="font-clashdisplay font-black text-2xl md:text-6xl text-center mb-4 md:mb-8">
          Photography is poetry &
        </h1>
        <h1 className="font-clashdisplay font-black text-2xl md:text-6xl text-center ">
          beautiful untold stories
        </h1>
      </div>

      <span className="w-[100%] ">
        <p className="text-center font-medium text-base md:text-lg px-10 md:px-[30%]">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </span>

      <div className="mt-10 w-[100%]">
        <Slider {...settings}>
          {imageList.map((img, index) => (
            <div
              key={index}
              className="px-4 mx-0 md:flex items-center justify-center md:h-80 md:w-36 "
            >
              <img src={img.url} alt={img.alt} className="w-fit" />
            </div>
          ))}
        </Slider>
      </div>

      <FeaturedProducts />

      {/* see the upcoming actions and exhibitions section here */}
      <AuctionAndExhibition />

      <div className="py-20 w-full font-satoshi">
        <hr />
        <span className="pl-4 pr-8 py-8 md:pl-20 md:pr-40 md:py-10 flex items-center justify-between">
          <p className="text-2xl md:text-4xl">Explore marketplace</p>
          <Link to="/marketplace">
            <span className="flex items-center justify-center border md:border-none rounded-full border-black w-12 h-12 cursor-pointer">
              <FaArrowRight className="text-2xl md:text-4xl md:text-[#4693ED]" />
            </span>
          </Link>
        </span>
        <hr />
        <span className="pl-4 pr-8 py-8 md:pl-20 md:pr-40 md:py-10 flex items-center justify-between">
          <p className="text-2xl md:text-4xl">See auctions</p>
          <Link to="/auctions">
            <span className="flex items-center justify-center border md:border-none rounded-full border-black w-12 h-12 cursor-pointer">
              <FaArrowRight className="text-2xl md:text-4xl md:text-[#4693ED]" />
            </span>
          </Link>
        </span>
        <hr />
      </div>

      <TopCreators />

      {/* newsletter section */}
      <div className=" w-[100%] md:px-20 md:py-10 px-4 py-6">
        <div className="mt-10 border border-black h-fit px-4 md:px-20 py-6 md:py-10 text-center">
          <h2 className="font-baskerville text-xl md:text-4xl mb-4">
            NEWSLETTER
          </h2>
          <p className="md:text-2xl mb-8">
            Subscribe to get daily updates on new drops & exciting deals{" "}
          </p>
          <span className="flex items-center gap-5 font-baskerville justify-center">
            <input
              type="text"
              placeholder="ENTER YOUR EMAIL"
              className="md:w-fit h-10 border border-black border-2 md:px-10 "
            />
            <button className="w-fit h-10 border-none bg-[#333333] px-4 md:px-10 uppercase text-white">
              subscribe
            </button>
          </span>
        </div>
      </div>

      <Footer />
    </div>
  );
};
