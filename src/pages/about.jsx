import Navbar from "@/components/Navbar";
import Head from "next/head";
import { FaRegSmile, FaStar, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#18191B]  min-h-[100vh] relative">
      <Navbar />
      <div
        className="w-full flex items-center justify-center overflow-hidden text-white text-[50px] h-[40vh] md:h-[50vh] bg-cover bg-center absolute top-0"
        style={{
          backgroundImage: "url('/images/1.jpg')",
          backgroundAttachment: "fixed",
        }}
      >
        <p className="mt-[80px] z-10">About Us</p>
        <div className="w-full h-[84vh] absolute top-0 bg-black opacity-40"></div>
      </div>

      <div className="flex w-full items-center justify-center  text-sm md:text-md py-[10px]">
        <div className="bg-[#18191B]  w-full text-white flex flex-col md:flex-row justify-between max-w-screen-xl gap-8 pt-[45vh] md:pt-[55vh] px-4 md:px-0">
          <div className="w-full md:w-1/2">
            <p className="text-lg text-[#FAB207] mb-4">THE FITNESS ICON GYM</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              iusto praesentium eaque a omnis ea animi modi dolores non? Vero
              quasi quibusdam placeat? Accusantium tempore expedita nobis
              dolorem, exercitationem praesentium.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              iusto praesentium eaque a omnis ea animi modi dolores non? Vero
              quasi quibusdam placeat? Accusantium tempore expedita nobis
              dolorem, exercitationem praesentium.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col">
            <p className="text-lg text-[#FAB207] mb-4">Activity</p>
            <div className="flex flex-wrap">
              <div className="flex flex-col md:w-1/2 gap-2">
                <BulletPoint>Strength Training</BulletPoint>
                <BulletPoint>Cardiovascular Exercise</BulletPoint>
                <BulletPoint>Group Fitness Classes</BulletPoint>
                <BulletPoint>Functional Training</BulletPoint>
              </div>
              <div className="flex flex-col md:w-1/2 gap-2 mt-2 md:mt-0">
                <BulletPoint>Flexibility and Mobility</BulletPoint>
                <BulletPoint>Flexibility</BulletPoint>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BulletPoint = ({ children }) => (
  <p className="flex items-center">
    <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2"></span>
    {children}
  </p>
);

export default About;
