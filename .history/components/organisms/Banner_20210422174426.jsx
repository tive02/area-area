import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(
      ` hidden xl:block xl:flex xl:grid md:grid-cols-2 xl:justify-items-center xl:place-items-center
      bg-purple-700 divide-x divide-black h-full
      bg-gradient-to-r from-purple-800 via-gray-900 to-gray-900`
    )}
  >
    <div className="   p-8 ">
      <p className="flex flex-wrap content-around text-green-400 text-6xl font-serif font-back  ">
        {title}
      </p>
      <p className="text-purple-400 text-lg font-serif font-thin  ">
        {subtitle}
      </p>
    </div>
    <div className="  flex w-3/4 h-3/4  ">
      <img src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
