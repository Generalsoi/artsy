import React from "react";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { imageList } from "../helpers/homePageImgList";
import { FeaturedProducts } from "./featuredProducts";

export const HomePageContents = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 6,
    slidesToScroll: 1,
    speed: 500,
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

      <div className="mt-10">
        <Slider {...settings}>
          {imageList.map((img, index) => (
            <div
              key={index}
              className="mx-4 md:flex items-center justify-center md:h-96 "
            >
              <img src={img.url} alt={img.alt} />
            </div>
          ))}
        </Slider>
      </div>

      <FeaturedProducts />
    </div>
  );
};
