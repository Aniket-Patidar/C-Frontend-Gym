import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lazy from "./Lazy";
import Image from "next/image";
const Carosal = ({ Swiper, SwiperSlide }) => {
  var data = [
    {
      src: "/images/s1.jpg",
    },
    {
      src: "/images/s2.jpg",
    },
    {
      src: "/images/s3.jpg",
    },
    {
      src: "/images/s4.jpg",
    },
  ];

  return (
    <div className="w-[100vw] h-[84vh] overflow-hidden bg-c1">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-[85vh] w-[100vw] overflow-hidden"
      >
        {data.map(({ src }, i) => {
          return (
            <div className="" key={i}>
              <SwiperSlide>
                <Lazy
                  src={src}
                  height={"85vh"}
                  width={"100vw"}
                  className="h-full w-full object-cover object-center"
                  alt=""
                />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carosal;
