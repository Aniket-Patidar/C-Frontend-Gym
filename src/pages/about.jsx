import Navbar from "@/components/Navbar";
import React from "react";

const About1 = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex min-h-screen items-center justify-center bg-[#18191B]">
        <section className="max-w-screen-xl  text-white dark:bg-dark mt-[100px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap  items-center justify-between">
              {/* <div className="w-full">
                <div className="flex  items-center">
                  <div className="w-full sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <img
                        src="./images/1.jpg"
                        alt=""
                        className="w-[200px] rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <img
                        src="./images/2.jpg"
                        alt=""
                        className="w-[200px] rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="w-full  px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <img
                        src="./images/3.jpg"
                        alt=""
                        className="w-[200px] rounded-2xl"
                      />
                  
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="py-3 sm:py-4 sm:hidden md:visible">
                <img
                  src="./images/1.jpg"
                  alt=""
                  className="w-[300px] rounded-2xl"
                />
              </div>

              <div className="w-full   px-4 ">
                <div className="mt-10 lg:mt-0">
                  <span className="block mb-4 text-lg font-semibold text-primary">
                    Why Choose Us
                  </span>
                  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                    Make your customers happy by giving services.
                  </h2>
                  <p className="mb-5 text-base text-body-color dark:text-dark-6">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less.
                  </p>
                  <p className="mb-8 text-base text-body-color dark:text-dark-6">
                    A domain name is one of the first steps to establishing your
                    brand. Secure a consistent brand image with a domain name
                    that matches your business.
                  </p>
                  <a
                    href="javascript:void(0)"
                    className="   inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border  rounded-md px-7 bg-primary hover:bg-opacity-90 "
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About1;
