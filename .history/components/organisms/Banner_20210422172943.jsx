import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(
      ` hidden md:block md:flex md:grid md:grid-cols-2 md:justify-items-center md:place-items-center
      bg-purple-700 divide-x divide-black h-full
      bg-gradient-to-r from-purple-800 via-gray-900 to-gray-900`
    )}
  >
    <div className="   pb-8 ">
      <p className="flex flex-wrap content-around text-green-400 text-5xl font-serif font-back  p-6  ">
        {title}
      </p>
      <p className="text-purple-400 text-lg font-serif font-thin mr-2 ">
        {subtitle}
      </p>
    </div>
    <div className="  flex w-3/4 h-3/4  ">
      <img src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
