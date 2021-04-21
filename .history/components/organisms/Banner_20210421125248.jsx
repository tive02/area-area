import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(` hidden md:block md:flex lg:divide-x lg:divide-black
    `)}
  >
    <div className=" w-1/2 pt-16 pb-8 ">
      <h1 className="text-green-400 text-center text-5xl font-serif font-back  pt-6 pb-0  md:text-xl ">
        {title}
      </h1>
      <p className="text-purple-700 text-center text-lg font-serif font-thin mr-2 md:grid md:grid-row">
        {subtitle}
      </p>
    </div>
    <div className=" flex w-1/2 pt-20 lg:justify-center ">
      <img className={classnames(`h-64 w-4/5`)} src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
