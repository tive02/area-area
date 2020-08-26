import React from 'react';
import classnames from 'classnames'

const Banner = ({ bgColor, title, subtitle }) => (
  <div className={classnames(`bg-${bgColor} pb-4 flex-col flex-grow md:pb-0 border-gray-800`)}
  >
    <h1 className="text-center text-5xl font-back pt-6 pb-0  md:text-6xl ">
      {title}
    </h1>
    <h2 className="text-center text-lg  font-thin mr-2 hidden md:grid md:grid-row">
      {subtitle}
    </h2>
  </div >

)


export default Banner
