// pages/about.js

import Navbar from "@/components/Navbar";
import Head from "next/head";
import { FaRegSmile, FaStar, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="h-fit bg-[#18191B] relative">
      <Navbar></Navbar>
      <div
        className="w-full flex items-center justify-center overflow-hidden text-white   text-[50px] h-[40vh] md:h-[50vh] bg-cover bg-center absolute top-0 "
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="mt-[80px] z-10">About Us</p>
        <div className="w-full h-[84vh] absolute top-0 bg-black opacity-40"></div>
      </div>

      <div className="bg-[#18191B]  h-[100vh] w-[100vw] pt-[45vh] md:pt-[55vh] text-white flex flex-col max-w-screen-xl gap-[20px] px-[10px] md:px-[120px]">
        <p className="text-sm">
          Welcome to [Your Gym Name], where fitness meets community, and
          wellness becomes a lifestyle. Established in [Year], our gym is more
          than just a place to work out – it's a destination for individuals
          passionate about
        </p>
        <p>
          transforming their lives through health and fitness. Our Journey [Your
          Gym Name] was founded with a vision to create a fitness haven that
          goes beyond the conventional gym experience. Since our inception, we
          have been committed to empowering our members to reach their fitness
          goals, adopt a healthier lifestyle, and build a supportive community.
        </p>
        <p>
          transforming their lives through health and fitness. Our Journey [Your
          Gym Name] was founded with a vision to create a fitness haven that
          goes beyond the conventional gym experience. Since our inception, we
          have been committed to empowering our members to reach their fitness
          goals, adopt a healthier lifestyle, and build a supportive community.
        </p>

        <p>
          transforming their lives through health and fitness. Our Journey Your
          have been committed to empowering our members to reach their fitness
          goals, adopt a healthier lifestyle, and build a supportive community.
        </p>
      </div>
    </div>
  );
};

export default About;
