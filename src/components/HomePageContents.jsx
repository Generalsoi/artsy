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

      {/* see the upcoming actions and exhibitions section here */}
      <div
        className="mt-10 h-fit px-4 md:px-20 py-4 md:py-10"
        style={{
          background:
            "linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",
        }}
      >
        <h2 className="font-bold text-white md:text-3xl hidden md:block">
          See Upcoming Actions and Exhibitions
        </h2>
        <hr className="text-white w-[40%] mt-6" />

        <div
          className="md:flex items-end justify-between"
          style={{ backgroundImage: 'url("../assets/images/auctionbg.png")' }}
        >
          <div>
            <h3>01</h3>
            <span>
              <h2>MONALISA REDEFINED IN STYLE</h2>
              <p>Start on : 08:00 GTS . Monday </p>
              <p>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </span>
          </div>
          <div>
            <span>
              <p>See more</p>
            </span>
            <button>Set a reminder</button>
          </div>
        </div>
      </div>
    </div>
  );
};
