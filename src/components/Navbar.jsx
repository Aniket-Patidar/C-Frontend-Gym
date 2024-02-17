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
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="text-white dark:bg-c2 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="h-[35px] bg-c1 flex  items-center gap-5 px-3 ">
          <div className="flex items-center gap-1">
            <MdOutlineLocalPhone className="text-c2" />
            <p className="text-sm">+916266302210</p>
          </div>

          <div className="flex items-center gap-1">
            <IoLocationSharp className="text-c2" />
            <p className="text-sm">Bhopal</p>
          </div>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-8" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              GYM
            </span>
          </Lin>
          <div className="flex gap-2 text-white items-center justify-center   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaInstagram className="cursor-pointer" />
            <FaFacebook className="cursor-pointer" />
            <FaWhatsapp className="cursor-pointer" />
            <RxHamburgerMenu
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer  md:hidden"
            />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col font-semibold  text-lg text-white bg-transparent p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3  rounded md:bg-transparent  md:p-0 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded  md:hover:bg-transparent md:p-0 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded md:hover:bg-transparent  md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3  rounded   md:p-0 ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        {navbar && (
          <div className=" md:hidden bg-c1 text-white flex flex-col  px-[10px] py-[20px] text-sm gap-3">
            <div className="flex gap-1">
              <FaHome />
              <a href="#">Home</a>
            </div>
            <div className="flex gap-1">
              <MdOutlineRoundaboutLeft />
              <a href="#">About</a>
            </div>
            <div className="flex gap-1">
              <GrServices />
              <a href="#">Services</a>
            </div>
            <div className="flex gap-1">
              <RiContactsFill />
              <a href="#">Contract</a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
