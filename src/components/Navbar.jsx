import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { RiContactsFill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";
import TypingEffect from "./TypingEffect";
import Lazy from "./Lazy";
import WhatsAppButton from "./whatsup";
import { CiClock2 } from "react-icons/ci";
import LocationIcon from "./Location";
import { MdEmail } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  return (
    <div>
      <nav className="text-white bg-[#18191B]  w-full z-20 top-0 start-0 border-b   h-fit relative">
        <div className="h-[35px] bg-[#18191B] flex  items-center justify-between  md:px-[9.2%]  hidden md:flex">
          <div className="flex gap-[20px]">
            <div className="flex items-center gap-1 text-sm ">
              <MdOutlineLocalPhone className="text-[#FAB207]" />
              <p>Call Now :</p>
              <p className="text-sm">916266302210</p>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MdEmail className="text-[#FAB207]" />
              <p>Email :</p>
              <p className="text-sm">916266302210</p>
            </div>
            <LocationIcon></LocationIcon>

            <div className="flex items-center gap-1 text-sm">
              <FaRegClock className="text-[#FAB207] font-semibold" />
              <p> Working Hours :</p>
              <p className="text-sm">08:00-17:00</p>
            </div>
          </div>
          <div className="flex gap-4 text-white items-center justify-center   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaInstagram className="cursor-pointer iconsOpacity" />
            <FaFacebook className="cursor-pointer iconsOpacity" />
            <WhatsAppButton></WhatsAppButton>
          </div>
        </div>

        <div className="bg-white w-full h-[1px] hidden md:block"></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative bg-[#000000] md:bg-[#18191B]">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Lazy src="/images/logo.png" className="h-8" alt="Logo" />
            <TypingEffect></TypingEffect>
          </Link>

          <div
            className="items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav>
              <ul className=" md:flex flex-col font-semibold text-lg text-white bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#FAB207] rounded-full border-none"></span>
                  <Link
                    href="/"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/" ? "active" : ""
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#FAB207] rounded-full border-none"></span>

                  <Link
                    href="/about"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#FAB207] rounded-full border-none"></span>

                  <Link
                    href="/packages"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/packages" ? "active" : ""
                    }`}
                  >
                    Packages
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#FAB207] rounded-full border-none"></span>

                  <Link
                    href="/contractUs"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/contractUs" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            {navbar ? (
              <RxHamburgerMenu
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer  md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer  md:hidden"
              />
            )}
          </div>
        </div>
        {navbar && (
          <div className=" md:hidden bg-[#000000] text-white flex flex-col  px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30  animateNav overflow-hidden">
            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/" className="px-[10px]">
                  Home
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/about" className="px-[10px]">
                  About
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/packages" className="px-[10px]">
                  Packages
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>

            <div className=" flex flex-col h-[40px] px-[30px]  ">
              <div className="flex gap-1 hover:text-[#FAB207]  h-full hover:bg-[#111111] items-center ">
                <Link href="/contractUs" className="px-[10px]">
                  Contract Us
                </Link>
              </div>

              <div className="w-[100%] h-fit flex items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
