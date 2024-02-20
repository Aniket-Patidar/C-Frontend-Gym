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

      <div className="min-h-screen  bg-[#18191B] py-12 mt-[25px] md:mt-[100px] px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">
            Membership Packages
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PackageCard
              title="1 Month Pack"
              description="Get started on your fitness journey with access to our top-notch facilities and expert guidance for one month."
              price="$3500"
              imageSrc="/images/1.jpg"
              id={1}
            />
            <PackageCard
              title="4 Month Pack"
              description="Commit to your fitness goals with extended access and personalized training plans over four months."
              price="$12,500"
              imageSrc="/images/2.jpg"
              id={2}
            />
            <PackageCard
              title="6 Month Pack"
              description="Elevate your fitness journey with unlimited access, ongoing support, and exclusive discounts for six months."
              price="$17,500"
              imageSrc="/images/3.jpg"
              id={3}
            />
            <PackageCard
              title="12 Month Pack"
              description="Invest in long-term wellness with a full year of unrestricted access, personalized nutrition guidance, and priority booking."
              price="$31,000"
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
    <div className="bg-[#8A8A8E] rounded-lg shadow-md overflow-hidden">
      <Lazy
        height={""}
        width={"100%"}
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl  text-gray-800 mb-4 font-[900]">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-gray-700 font-[700]">Price: {price}</p>
        <button
          onClick={(e) => router.push("/contractUs?id=" + id)}
          className="mt-4 bg-[#18191B] text-white py-2 px-4  font-[400] rounded-md transition duration-300 hover:bg-[#18191bb8]"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Packages;
