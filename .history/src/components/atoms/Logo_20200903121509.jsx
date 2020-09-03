import React from 'react'
import { NavLink } from 'react-router-dom';


const Logo = () => {
  return (
    <NavLink exact to="/" className="flex md:grid md:grid-cols-1 gap-0 text-white mr-6 ">
      <div className="md:flex md:justify-center">
        <img
          className="rounded-full h-20 w-20  lg:h-16 lg:w-16 "
          src="https://pbs.twimg.com/profile_images/1300604856214978561/Aaga6eOR_400x400.jpg"
          alt="" />
      </div>
      <span className="flex self-center pl-4 p-0 text-center text-xl lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo
