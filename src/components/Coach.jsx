import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Coach = () => {
  var data = [
    {
      name: "Mayank",
      post: "owner",
      des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            rerum odit vel sequi labore perspiciatis officia vero est incidunt
            repellendus explicabo quasi voluptate suscipit ducimus quibusdam
            maxime molestiae quas numquam.`,
      src: "./images/1.jpg",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      name: "Neha Patidar",
      post: "tranner",
      des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              rerum odit vel sequi labore perspiciatis officia vero est incidunt
              repellendus explicabo quasi voluptate suscipit ducimus quibusdam
              maxime molestiae quas numquam.`,
      src: "./images/2.jpg",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      name: "Raj vear",
      post: "owner",
      des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              rerum odit vel sequi labore perspiciatis officia vero est incidunt
              repellendus explicabo quasi voluptate suscipit ducimus quibusdam
              maxime molestiae quas numquam.`,
      src: "./images/3.jpg",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
    {
      name: "Prince Raj",
      post: "owner",
      des: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              rerum odit vel sequi labore perspiciatis officia vero est incidunt
              repellendus explicabo quasi voluptate suscipit ducimus quibusdam
              maxime molestiae quas numquam.`,
      src: "./images/4.jpg",
      instagram: "#",
      twitter: "#",
      facebook: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-wrap md:px-[10px] py-3">
      {data.map(({ name, post, des, src, instagram, twitter, facebook }) => {
        return (
          <div className="flex w-[600px] h-[250px]  bg-[#292C33] overflow-hidden">
            <div className="h-[250px] w-[600px] overflow-hidden">
              <img
                className=" object-cover object-center w-full h-full"
                src={src}
                alt=""
              />
            </div>
            <div className="px-2 py-4 flex flex-col justify-between">
              <p className="capitalize">{name}</p>
              <p className="text-c2 capitalize">{post}</p>
              <p className="text-sm opacity-[0.3] text-[10px] md:text-lg">{des}</p>
              <p className="flex gap-2">
                <Link href={instagram}>
                  <FaFacebook />
                </Link>
                <Link href={twitter}>
                  <FaInstagram />
                </Link>
                <Link href={facebook}>
                  <FaTwitter />
                </Link>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coach;
