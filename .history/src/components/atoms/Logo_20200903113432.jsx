import React from 'react'
import { NavLink } from 'react-router-dom';


const Logo = () => {
  return (
    <NavLink exact to="/" className="grid grid-cols-1 text-white mr-6 ">
      <img
        className="h-16 w-16"
        src="https://pbs.twimg.com/profile_images/1300604856214978561/Aaga6eOR_400x400.jpg"
        alt="" />
      <span className="text-center text-4xl lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo