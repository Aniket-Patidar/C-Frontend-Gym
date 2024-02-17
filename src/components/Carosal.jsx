import React from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Carosal = ({ Swiper, SwiperSlide }) => {
  return (
    <div className="w-[100vw] pt-[100px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="h-[89vh] w-[100vw] overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="./images/s1.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/s2.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/s3.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/s4.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/s5.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/s1.jpg"
            className="h-full w-full object-cover object-center"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carosal;
