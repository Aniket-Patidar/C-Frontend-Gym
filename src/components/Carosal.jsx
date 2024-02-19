import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lazy from "./Lazy";

const slides = [
  {
    imageUrl: "/images/s1.jpg",
    title: "Beautiful Sunset",
    description: "Experience the magic of ",
  },
  {
    imageUrl: "./images/s2.jpg",
    title: "Serenity of Nature",
    description: "Discover the tranquility ",
  },
  // Add more slides as needed
];

const MainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full  md:mt-[100px] h-[95vh] md:h-[86vh]  relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 transform ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex items-center justify-start ">
            <div className="text-left text-white absolute ml-[150px]">
              <p className="text-[20px] uppercase">Hii Lalal lalal</p>
              <h2 className="text-[70px]  font-[200] mb-4 transition-transform transform ">
                {slide.title}
              </h2>
              <button className="text-sm transition-transform transform border-2 font-semibold px-5 py-2 ">
                Book A demo
              </button>
            </div>
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="object-cover w-[100vw] "
            />
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default MainPage;
