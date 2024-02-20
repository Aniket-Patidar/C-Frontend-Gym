import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdReviews,
} from "react-icons/md";
import { GoCodeReview } from "react-icons/go";

const Review = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  // Sample data for media cards
  const mediaData = [
    {
      sections: [
        {
          title: "Prince",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Kumar",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    {
      sections: [
        {
          title: "Prince",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Kumar",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Auto slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (activeSlide === mediaData.length - 1) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide === 0) {
      setActiveSlide(mediaData.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="container h-fit w-[60%]  px-[2px] md:w-[100%] lg:w-[90%] relative overflow-hidden">
      <div
        className="slider h-fit"
        ref={sliderRef}
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {mediaData.map((slide, index) => (
          <div key={index} className="slide flex gap-[30px] bg-[#0f10129c]">
            {slide.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className={`w-full  md:w-1/2 flex items-start justify-center ${
                  sectionIndex === 1 ? "hidden w-[0px] lg:flex" : "lg:flex"
                } py-[50px] px-[20px] bg-[#10111393] rounded-lg shadow-md flex justify-center items-start`}
              >
                <div className="w-[180px] h-[40px] bg-[#FAB207] flex items-center justify-center">
                  <MdReviews className="text-lg font-semibold" />
                </div>
                <div className="p-6 ">
                  <p className={`text-white text-[14px] lg:text-[12px] `}>{section.description}</p>
                  <h2 className="text-sm font-semibold text-[#FAB207] mt-3">{section.title}</h2>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="absolute top-[50%] left-0 transform -translate-y-1/2 z-20" onClick={prevSlide}>
        <MdOutlineKeyboardArrowLeft className="text-white text-3xl" />
      </button>
      <button className="absolute top-[50%] right-0 transform -translate-y-1/2 z-20" onClick={nextSlide}>
        <MdOutlineKeyboardArrowRight className="text-white text-3xl" />
      </button>
      {/* <div className="dots absolute bottom-[0px] left-1/2 transform -translate-x-1/2">
        {mediaData.map((_, index) => (
          <span
            key={index}
            className={index === activeSlide ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default Review;
