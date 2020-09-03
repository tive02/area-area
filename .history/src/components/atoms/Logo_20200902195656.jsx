import React from 'react'
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <NavLink exact to="/" className="flex justyfy-center items-center 
    flex-no-shrink text-white mr-6 ">
      <svg width="284" height="284" viewBox="0 0 284 284" fill="none"
        xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
      </svg >
      <span className="text-center text-4xl lg:text-xl tracking-tight">De Área a Área</span>
    </NavLink >
  )
}

export default Logo
