import React from 'react';
import classnames from 'classnames'


const Banner = ({ bgColor, title, subtitle }) => (
  <div className="">

    <img className="fixed"
      src="data:image/jpeg;base64,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"
      alt="Imagen de fondo" />
    <div className={classnames(`bg-${bgColor} pb-4 flex-col flex-grow md:pb-0 border-gray-800`)}
    >

      <h1 className="text-center text-5xl font-back pt-6 pb-0  md:text-6xl ">
        {title}
      </h1>
      <h2 className="text-center text-lg  font-thin mr-2 hidden md:grid md:grid-row">
        {subtitle}
      </h2>
    </div >
  </div>


)


export default Banner
