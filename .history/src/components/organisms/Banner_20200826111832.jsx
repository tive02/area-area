import React from 'react';
import classnames from 'classnames'


const Banner = ({ bgColor, title, subtitle }) => (

  <div className={classnames(`bg-${bgColor} pb-4 flex flex-grap lg:grid-cols-2 md:pb-4  border-gray-800`)}
  >
    <div className="hidden lg:p-4 lg:w-full lg:h-auto lg:flex">
      <img
        src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
        className="w-24 h-24"
        alt="Imagen del Banner"
      />
    </div>
    <div className="content-center w-full ">
      <h1 className="text-center text-5xl font-serif font-back pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-center text-lg font-serif font-thin mr-2 md:grid md:grid-row">
        {subtitle}
      </h2>
    </div >
  </div>



)


export default Banner
