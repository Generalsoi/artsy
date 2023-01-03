import React from "react";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { imageList } from "../helpers/homePageImgList";
import { FeaturedProducts } from "./featuredProducts";

export const HomePageContents = () => {
  const settings = {
    dots: true,
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
    </div>
  );
};
