import React from 'react';
import classnames from 'classnames'


const Banner = ({ title, subtitle }) => (

  <div className={classnames(`bg-green-400 flex mt-40 md:p-8 border-gray-800 lg:bg-opacity-75
  static`)}
  >
    <div className="hidden lg:flex lg:w-1/2">
      <img
        src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
        className="w-full "
        alt="Imagen del Banner"
      />
    </div>
    <div className="content-center w-full lg:w-1/2 ">
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
