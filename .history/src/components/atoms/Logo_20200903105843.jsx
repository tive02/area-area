import React from 'react'
import { NavLink } from 'react-router-dom';


const Logo = () => {
  return (
    <NavLink exact to="/" className="flex justyfy-center items-center 
    flex-no-shrink text-white mr-6 ">



      <span className="text-center text-4xl lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo
