import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle }) => (
  <div className={classnames(`bg-gray-900 flex md:p-8 border-gray-800 `)}>
    <div className="content-center w-full">
      <h1 className="text-green-400 text-center text-5xl font-serif font-back  pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-purple-700 text-center text-lg font-serif font-thin mr-2 md:grid md:grid-row">
        {subtitle}
      </h2>
    </div>
  </div>
);

export default Banner;
