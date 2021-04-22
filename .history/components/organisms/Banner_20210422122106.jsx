import React from "react";
import classnames from "classnames";

const Banner = ({ title, subtitle, img, Description }) => (
  <div
    className={classnames(
      ` hidden md:block md:flex md:grid md:grid-cols-2 md:justify-items-center md:place-items-center
      bg-purple-700 divide-x divide-black h-full`
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
    <div className=" bg-blue-500  flex w-3/4 h-3/4  ">
      <img
        src="data:image/jpeg;base64,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"
        alt={Description}
      />
    </div>
  </div>
);

export default Banner;
