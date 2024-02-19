import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className="w-full h-[84vh] relative bg-red-300">
      {/* Background Image */}
      <div
        className="w-full h-[84vh] bg-cover bg-center absolute top-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="w-full h-[84vh] absolute top-0 bg-[#93979b] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto   h-full flex justify-center items-center">
        <div className="text-white">
          <div className="flex flex-col justify-between max-w-screen-xl w-full items-center">
            <p className="text-[30px] font-thin uppercase">What We Do</p>
            <div>
              <div className="flex items-center gap-2   my-[25px]">
                <div className="w-[20vw] h-[1px] bg-[#dadada8f]"></div>
                <div className="w-[7px] h-[7px] bg-[#DCB800] border-none rounded-full"></div>
                <div className="w-[20vw] h-[1px] bg-[#dadada8f]"></div>
              </div>
            </div>

            <div className="text-white relative z-20">
              <h2>Carousel Component</h2>
              <Slider {...settings}>
                <div>
                  <h3 className="bg-red-50 h-[100px]">FIRST SLIDE</h3>
                </div>
                <div>
                  <h3>SECOND SLIDE</h3>
                </div>
                <div>
                  <h3>THIRD SLIDE</h3>
                </div>
                <div>
                  <h3>FORTH SLIDE</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
