import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(
      ` hidden md:block md:flex md:grid md:grid-cols-2 md:justify-items-center md:place-items-center h-64`
    )}
  >
    <div className=" bg-red-500  pb-8 ">
      <h1 className="flex flex-wrap content-around text-green-400 text-center text-5xl font-serif font-back  pt-6 pb-0 ">
        {title}
      </h1>
      <p className="text-purple-400 text-center text-lg font-serif font-thin mr-2 ">
        {subtitle}
      </p>
    </div>
    <div className=" bg-blue-500  flex w-1/2 h-1/2  ">
      <img src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
