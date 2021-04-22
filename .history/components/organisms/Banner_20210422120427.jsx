import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(
      ` hidden md:block md:flex md:grid md:grid-cols-2 md:justify-items-center h-64`
    )}
  >
    <div className=" bg-red-500  pb-8 place-items-center">
      <h1 className="flex text-green-400 text-center text-5xl font-serif font-back  pt-6 pb-0 ">
        {title}
      </h1>
      <p className="text-purple-400 text-center text-lg font-serif font-thin mr-2 ">
        {subtitle}
      </p>
    </div>
    <div className=" bg-blue-500  flex w-1/2 h-1/2 lg:justify-center ">
      <img src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
