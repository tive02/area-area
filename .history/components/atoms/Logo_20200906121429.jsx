import React from 'react'
import Link from 'next/link'


const Logo = () => {
  return (
    <Link exact to="/" className="flex md:grid md:grid-cols-1 gap-0 text-white ">
      <div className="md:flex md:justify-center">
        <img
          className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
          src="https://pbs.twimg.com/profile_images/1300604856214978561/Aaga6eOR_400x400.jpg"
          alt="" />
      </div>
      <span className="flex self-center pl-4 p-0 text-center text-xl lg:hidden lg:text-xl tracking-tight">De Área a Área</span>
    </Link >
  )
}

export default Logo
