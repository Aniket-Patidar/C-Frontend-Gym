import Carosal from "@/components/Carosal";
import Programs from "@/components/Programs";
import Navbar from "@/components/Navbar";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Coach from "@/components/Coach";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollButton from "@/components/ScrollButton";
import { useEffect, useState } from "react";
import ScrollToTopButton from "@/components/ScrollButton";
import { FaArrowUp } from "react-icons/fa";
import Tab from "@/components/Tab";

export default function Home() {


  return (
    <div  >
      {/* navbar */}
      <Navbar></Navbar>
      <Carosal Swiper={Swiper} SwiperSlide={SwiperSlide}></Carosal>
      <div className="bg-[#18191B] text-white md:py-[30px]  md:px-[10px]">
        <Programs></Programs>
        {/* <Coach></Coach> */}
      </div>


      <Tab />

      <div className="#18191E w-full h-[30vh] bg-[#FAB207] flex items-center justify-evenly text-white flex-col">
        <p className="text-center">
          For any inquiries, feedback, or to schedule a visit, please don&apost
          <br />
          hesitate to reach out to us using the contact information provided below.
        </p>
        <Link href="/contractUs">
          <button className="px-[20px] py-[6px] border  font-semibold">Contract Us</button>
        </Link>
      </div>




      <Footer></Footer>
    </div>
  )
}
