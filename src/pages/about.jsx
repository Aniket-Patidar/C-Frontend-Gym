// pages/about.js

import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-900 min-h-screen py-12 px-4 mt-[7 0px]">
        <div className="max-w-4xl mx-auto text-center">
          <Lazy
            src="/images/1.jpg"
            alt="Gym"
            className="rounded-full w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-3xl font-bold text-white mb-4">About Our Gym</h1>
          <p className="text-lg text-white mb-8">
            Welcome to our fitness community! At our gym, we are dedicated to
            helping our members achieve their fitness goals and lead healthier
            lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Our Mission
              </h2>
              <p className="text-white">
                Our mission is to provide a supportive environment where
                individuals of all fitness levels can thrive. We strive to offer
                top-notch facilities, expert guidance, and a variety of classes
                and programs to help you reach your fitness aspirations.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">
                Contact Information
              </h2>
              <p className="text-white">
                Mobile: 123-456-7890
                <br />
                Address: 123 Fitness Street, City, Country
              </p>
              <div className="flex justify-center mt-4">
                <Link href="#" className="text-white mr-4 hover:text-gray-400">
                  <FaFacebook size={24} className="iconsOpacity" />
                </Link>
                <Link href="#" className="text-white mr-4 hover:text-gray-400">
                  <FaTwitter size={24} className="iconsOpacity" />
                </Link>
                <Link href="#" className="text-white hover:text-gray-400">
                  <FaInstagram size={24} className="iconsOpacity" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
