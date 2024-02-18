import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lazy from "./Lazy";
import Image from "next/image";

const Carosal = ({ Swiper, SwiperSlide }) => {
  const data = [
    {
      id: 1,
      src: "/images/s1.jpg",
    },
    {
      id: 2,
      src: "/images/s2.jpg",
    },
    {
      id: 3,
      src: "/images/s3.jpg",
    },
    {
      id: 4,
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
        autoplay={5000}
        speed={800}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-[85vh] w-[100vw] overflow-hidden"
      >
        {data.map(({ id, src }) => (
          <div className="" key={id}>
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
        ))}
      </Swiper>
    </div>
  );
};

export default Carosal;
