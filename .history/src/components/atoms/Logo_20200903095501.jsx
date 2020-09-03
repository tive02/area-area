import React from 'react'
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink exact to="/" className="flex justyfy-center items-center 
    flex-no-shrink text-white mr-6 ">
      <svg
        version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
        width="485" height="612" x="0" y="0"
        </svg>

      <span className="text-center text-4xl lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo
