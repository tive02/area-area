import React from 'react'
import { NavLink } from 'react-router-dom';


const Logo = () => {
  return (
    <NavLink exact to="/" className="grid grid-cols-1 gap-0 text-white mr-6 ">
      <div className="flex justify-center">
        <img
          className="h-8 w-8 "
          src="https://pbs.twimg.com/profile_images/1300604856214978561/Aaga6eOR_400x400.jpg"
          alt="" />
      </div>
      <span className="text-center text-sm lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo
