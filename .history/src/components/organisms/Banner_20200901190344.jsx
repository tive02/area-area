import React from 'react';
import classnames from 'classnames'


const Banner = ({ title, subtitle, img, Description, height }) => (

  <div className={classnames(`bg-gray-900 flex md:p-8 border-gray-800
  static`)}
  >
    <div className="hidden lg:flex lg:w-1/2 lg:pt-20 lg:justify-center ">
      <img
        className={classnames(`h-64 w-4/5`)}
        src={img}
        alt={Description}
      />
    </div>
    <div className="content-center w-full lg:w-1/2 pt-16 pb-8 lg:pt-20">
      <h1 className="text-center text-5xl font-serif font-white pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-center text-lg font-serif font-white mr-2 md:grid md:grid-row">
        {subtitle}
      </h2>
    </div >
  </div>



)


export default Banner
