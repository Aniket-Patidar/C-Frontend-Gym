import React, { useState } from "react";
import Lazy from "./Lazy";

const Tab = () => {
  const [current, setCurrent] = useState(1);

  // Function to render the appropriate component based on the current state
  const renderComponent = () => {
    switch (current) {
      case 1:
        return <T1Component />;
      case 2:
        return <T2Component />;
      case 3:
        return <T3Component />;
      case 4:
        return <T4Component />;
      default:
        return null;
    }
  };

  var data = [
    {
      src: "./images/s1.jpg",
      id: 1,
    },
    {
      src: "./images/s2.jpg",
      id: 2,
    },
    {
      src: "./images/s3.jpg",
      id: 3,
    },
    {
      src: "./images/s4.jpg",
      id: 4,
    },
    {
      src: "./images/s5.jpg",
      id: 5,
    },
    {
      src: "./images/1.jpg",
      id: 6,
    },
    {
      src: "./images/s2.jpg",
      id: 7,
    },
    {
      src: "./images/4.jpg",
      id: 8,
    },
    {
      src: "./images/s5.jpg",
      id: 5,
    },
    {
      src: "./images/s3.jpg",
      id: 5,
    },
  ];

  // Define functional components for each tab content
  const T1Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
      <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
        {data.map(({ src }, i) => {
          return (
            <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i}>
              <Lazy
                style={{ transition: "all 2s ease-in-out" }}
                src={src}
                className="w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
              ></Lazy>
            </div>
          );
        })}
      </div>
    </div>
  );
  const T2Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
    <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
      {data.map(({ src }, i) => {
        return (
          <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i}>
            <Lazy
              style={{ transition: "all 2s ease-in-out" }}
              src={src}
              className="w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
            ></Lazy>
          </div>
        );
      })}
    </div>
  </div>
  );
  const T3Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
    <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
      {data.map(({ src }, i) => {
        return (
          <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden  " key={i}>
            <Lazy
              style={{ transition: "all 2s ease-in-out" }}
              src={src}
              className="w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
            ></Lazy>
          </div>
        );
      })}
    </div>
  </div>
  );
  const T4Component = () => (
    <div className="flex  items-center justify-center w-[100%] ">
      <div className="text-white flex items-center justify-center lg:items-start lg:justify-start flex-wrap gap-0">
        {data.map(({ src }, i) => {
          return (
            <div className="w-[30vw]  md:w-[20vw] h-[200px] overflow-hidden" key={i}>
              <Lazy
                style={{ transition: "all 2s ease-in-out" }}
                src={src}
                className="w-[30vw] md:w-[20vw] object-cover object-center h-[200px] hover:scale-[1.2] animateTabImage "
              ></Lazy>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="flex items-center w-full justify-center  md:items-start    min-h-[75vh] py-[20px] flex justify-center w-[100%]">
      <div className="w-full h-full flex-col text-white  flex items-center">
        <div className="flex md:gap-[15px]  pb-[25px] text-white font-[700] flex-wrap items-center justify-center">
          <div
            onClick={() => setCurrent(1)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 1 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Tab 1
          </div>
          <div
            onClick={() => setCurrent(2)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 2 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Tab 2
          </div>
          <div
            onClick={() => setCurrent(3)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 3 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Tab 3
          </div>
          <div
            onClick={() => setCurrent(4)}
            className={`tabs h-[40px] w-[150px] py-2 px-2 ${
              current === 4 ? "bg-[#FAB207]" : ""
            } text-center cursor-pointer text-sm align-center flex items-center justify-center`}
          >
            Tab 4
          </div>
        </div>
        <div className="w-full">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Tab;
