// pages/packages.js

import Lazy from "@/components/Lazy";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import React from "react";

const Packages = () => {
  const router = useRouter();

  return (
    <>
      <Navbar></Navbar>
      <div className="min-h-screen  bg-[#18191B] py-12 mt-[100px] px-4">
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
              id={1}
            />
            <PackageCard
              title="4 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$180"
              imageSrc="/images/2.jpg"
              id={2}
            />
            <PackageCard
              title="6 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$250"
              imageSrc="/images/3.jpg"
              id={3}
            />
            <PackageCard
              title="12 Month Pack"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor est nec turpis luctus, eget condimentum mi finibus."
              price="$450"
              imageSrc="/images/4.jpg"
              id={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PackageCard = ({ title, description, price, imageSrc, id }) => {
  const router = useRouter();

  return (
    <div className="bg-[#dadadac9] rounded-lg shadow-md overflow-hidden">
      <Lazy
        height={""}
        width={"100%"}
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 font-[700]">Price: {price}</p>
        <button
          onClick={(e) => router.push("/contractUs?id=" + id)}
          className="mt-4 bg-[#FAB207] text-white py-2 px-4  font-semibold transition duration-300 hover:bg-[#fab10797]"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Packages;
