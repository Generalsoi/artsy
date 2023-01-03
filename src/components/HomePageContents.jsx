import React from "react";
import Slider from "react-slick";
import "react-slideshow-image/dist/styles.css";
import { imageList } from "../helpers/homePageImgList";
import { FeaturedProducts } from "./featuredProducts";
import MyBgImg from "../assets/images/auctionbg.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

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
      <div
        className="mt-10 h-fit px-4 md:px-20 py-4 md:py-10 text-white"
        style={{
          background:
            "linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",
        }}
      >
        <h2 className="font-bold md:text-3xl hidden md:block">
          See Upcoming Actions and Exhibitions
        </h2>
        <hr className="text-white w-[40%] mt-6" />

        <div
          className="mt-8 pt-20 px-4 md:p-8 md:flex items-end justify-between"
          style={{
            backgroundImage: `url(${MyBgImg})`,
            height: "500px",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full md:w-[60%] flex items-center gap-5">
            <h3 className="text-3xl md:5xl h-8 font-bellefair">01</h3>
            <span>
              <h2 className="text-3xl md:text-4xl font-bellefair">
                MONALISA REDEFINED IN STYLE
              </h2>
              <p className="my-4 font-poppins text-sm uppercase">
                Start on : 08:00 GTS . Monday{" "}
              </p>
              <p>
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </span>
          </div>
          <div className="flex items-center justify-end gap-6 mt-5 md:mt-0">
            <span>
              <a href="#">
                <p className="md:text-2xl cursor-pointer underline">See more</p>
              </a>
            </span>
            <button className="h-8 w-fit p-4 md:p-6 flex items-center justify-center md:text-2xl border border-white rounded-lg">
              Set a reminder
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-between w-[100%] md:mt-5">
          <span className="h-3 w-60 bg-[#AEAEAE] border-none rounded-xl relative">
            <span className="h-3 w-16 absolute top-0 left-0 bg-white border-none rounded-xl"></span>
          </span>
          <span className="flex gap-4">
            <span
              style={{ background: `rgba(255, 255, 255, 0.2)` }}
              className="h-12 w-12 border-none rounded-full flex items-center justify-center cursor-pointer"
            >
              <IoIosArrowBack />
            </span>
            <span
              style={{ background: `rgba(255, 255, 255, 0.2)` }}
              className="h-12 w-12 border-none rounded-full flex items-center justify-center cursor-pointer"
            >
              <IoIosArrowForward />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
