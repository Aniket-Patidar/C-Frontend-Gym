import React from "react";
import Lazy from "./Lazy";

const Programs = () => {
  var data = [
    {
      id: 1,
      src: "/images/1.jpg",
      title: " Basic Crossfit",
    },
    {
      id: 2,
      src: "/images/2.jpg",
      title: " Basic Crossfit",
    },
    {
      id: 3,
      src: "/images/3.jpg",
      title: " Basic Crossfit",
    },
    {
      id: 4,
      src: "/images/4.jpg",
      title: " Basic Crossfit",
    },
  ];

  return (
    <div className="h-fit py-5 flex gap-[20px]  items-center justify-center md:justify-evenly flex-wrap w-[100vw] ">
      {data.map(({ src, id, title }) => {
        return (
          <div className="relative w-[85vw] md:h-[440px] md:w-[300px] overflow-hidden bg-c1" key={id}>
            <Lazy
              style={{ transition: "all 1s ease-in-out" }}
              className="w-full h-full object-cover object-center hover:scale-150 transitionTransform"
              src={src}
              height={"100%"}
              width={"100%"}

              alt=""
            />
            <p className="uppercase font-sans font-extrabold text-[25px] absolute bottom-[3%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center object-cover object-center">
              {title}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Programs;
