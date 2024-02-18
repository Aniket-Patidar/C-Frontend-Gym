// pages/packages.js

import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import React from "react";

const Packages = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-c1 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Membership Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PackageCard
              title="1 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$50"
              imageSrc="/images/1.jpg"
            />
            <PackageCard
              title="4 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$180"
              imageSrc="/images/2.jpg"
            />
            <PackageCard
              title="6 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$250"
              imageSrc="/images/3.jpg"
            />
            <PackageCard
              title="12 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$450"
              imageSrc="/images/4.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PackageCard = ({ title, description, price, imageSrc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Lazy height={""} width={"100%"} src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700">Price: {price}</p>
        <button className="mt-4 bg-c2 text-white py-2 px-4 rounded hover:bg-c3 transition duration-300  cool-button ">
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Packages;
