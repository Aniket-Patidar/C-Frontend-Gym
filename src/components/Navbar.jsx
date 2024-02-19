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
import LocationIcon from "./Location";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  return (
    <div>
      <nav className="text-white dark:bg-c2  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="h-[35px] bg-c1 flex  items-center gap-5 px-3 ">
          <div className="flex items-center gap-1">
            <MdOutlineLocalPhone className="text-c2" />
            <p className="text-sm">+916266302210</p>
          </div>

          <LocationIcon></LocationIcon>
        </div>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Lazy src="/images/logo.png" className="h-8" alt="Logo" />
            <TypingEffect></TypingEffect>
          </Link>
          <div className="flex gap-2 text-white items-center justify-center   md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <FaInstagram className="cursor-pointer iconsOpacity" />
            <FaFacebook className="cursor-pointer iconsOpacity" />
            <WhatsAppButton></WhatsAppButton>

            <RxHamburgerMenu
              onClick={() => setNavbar(!navbar)}
              className="cursor-pointer  md:hidden"
            />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav>
              <ul className="flex flex-col font-semibold text-lg text-white bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li>
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
                <li>
                  <Link
                    href="/about"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/about" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/packages"
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      router.pathname === "/packages" ? "active" : ""
                    }`}
                  >
                    Packages
                  </Link>
                </li>
                <li>
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
        </div>
        {navbar && (
          <div className=" md:hidden bg-c1 text-white flex flex-col  px-[10px] py-[20px] text-sm gap-3">
            <div className="flex gap-1 hover:opacity-[0.5]">
              <FaHome className="" />
              <Link href="/">Home</Link>
            </div>
            <div className="flex gap-1 hover:opacity-[0.5]">
              <MdOutlineRoundaboutLeft />
              <Link href="/about" className="">
                About
              </Link>
            </div>
            <div className="flex gap-1 hover:opacity-[0.5]">
              <GrServices />
              <Link href="/packages">Packages</Link>
            </div>
            <div className="flex gap-1 hover:opacity-[0.5]">
              <RiContactsFill />
              <Link href="/contractUs">Contract</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
