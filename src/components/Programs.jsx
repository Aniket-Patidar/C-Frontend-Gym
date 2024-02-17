import React from "react";

const Programs = () => {
  return (
    <div className="h-fit py-5 flex gap-[20px]  items-center justify-center md:justify-evenly flex-wrap w-[100vw] ">
      <div className="relative w-[85vw] md:h-[440px] md:w-[300px] overflow-hidden">
        <img
          style={{ transition: "all 1s ease-in-out" }}
          className="w-full h-full object-cover object-center hover:scale-[1.5]"
          src="/images/1.jpg"
          alt=""
        />
        <p className="uppercase  font-sans font-extrabold text-[25px] absolute bottom-[3%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center object-cover object-center">
          Basic Crossfit
        </p>
      </div>
      <div className="relative w-[85vw] md:h-[440px] md:w-[300px] overflow-hidden">
        <img
          style={{ transition: "all 1s ease-in-out" }}
          className="w-full h-full object-cover object-center hover:scale-[1.5]"
          src="/images/4.jpg"
          alt=""
        />
        <p className="uppercase font-sans font-extrabold text-[25px] absolute bottom-[3%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center object-cover object-center">
          fitness STUDIO
        </p>
      </div>
      <div className="relative w-[85vw] md:h-[440px] md:w-[300px] overflow-hidden">
        <img
          style={{ transition: "all 1s ease-in-out" }}
          className="w-full h-full object-cover object-center hover:scale-[1.5]"
          src="/images/2.jpg"
          alt=""
        />

        <p className="uppercase font-sans font-extrabold text-[25px] absolute bottom-[3%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center object-cover object-center">
          Yoga class
        </p>
      </div>
      <div className="relative w-[85vw] md:h-[440px] md:w-[300px] overflow-hidden">
        <img
          style={{ transition: "all 1s ease-in-out" }}
          className="w-full h-full object-cover object-center hover:scale-[1.5]"
          src="/images/3.jpg"
          alt=""
        />
        <p className="uppercase font-sans font-extrabold text-[25px] absolute bottom-[3%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center object-cover object-center">
          personal Training
        </p>
      </div>
    </div>
  );
};

export default Programs;
