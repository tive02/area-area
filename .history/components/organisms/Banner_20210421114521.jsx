import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(`bg-purple-700 flex md:p-8 border-gray-800 border-current border-2 divide-x
  static`)}
  >
    <div className="content-center w-full lg:w-1/2 pt-16 pb-8 lg:pt-20">
      <h1 className="text-green-400 text-center text-5xl font-serif font-back  pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-purple-700 text-center text-lg font-serif font-thin mr-2 md:grid md:grid-row">
        {subtitle}
      </h2>
    </div>
    <div className="hidden lg:flex lg:w-1/2 lg:pt-20 lg:justify-center ">
      <img className={classnames(`h-64 w-4/5`)} src={img} alt={Description} />
    </div>
  </div>
);

export default Banner;
