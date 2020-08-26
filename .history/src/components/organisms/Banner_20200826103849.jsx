import React from 'react';
import classnames from 'classnames'


const Banner = ({ bgColor, title, subtitle }) => (

  <div className={classnames(`bg-${bgColor} pb-4 grid-col-2 md:pb-4 border-gray-800`)}
  >
    <div className=" w-full h-screen">
      <img
        src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
        class="h-screen w-full"
        alt=""
      />
    </div>
    <div>
      <h1 className="text-center text-5xl font-serif font-back pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-center text-lg font-serif font-thin mr-2 hidden md:grid md:grid-row">
        {subtitle}
      </h2>
    </div >
  </div>



)


export default Banner
