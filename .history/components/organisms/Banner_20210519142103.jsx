import React from "react";
import classnames from "classnames";
import Image from "next/image";

const Banner = ({ title, subtitle, img, altImg, description }) => (
  <div
    className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen"
    style={{
      minHeight: "75vh",
    }}
  >
    <div className=" absolute top-0 w-full h-full bg-center bg-cover overflow-hidden object-contain">
      <span className="w-full h-full absolute opacity-70 bg-black z-10"></span>
      <div clasName="w-full h-full opacity-90">
        <Image
          alt={altImg}
          src={img}
          layout="responsive"
          height={403}
          width={732}
          objectFit="cover"
          quality={75}
        />
      </div>
    </div>
    <div className="container relative mx-auto">
      <div className="items-center flex flex-wrap">
        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div className="pr-12">
            <h1 className="text-white font-semibold text-5xl">{title}</h1>
            <p className="mt-4 text-lg text-gray-100">{description}</p>
          </div>
        </div>
      </div>
    </div>
    <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>
);

export default Banner;
