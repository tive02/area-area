import React from 'react'
import Link from 'next/link'



function Logo() {
  return (
    <>
      <Link href="/" className="flex justify-center md:grid md:grid-cols-1 gap-0 ">
        <img className="rounded-full h-32 w-32 lg:h-16 lg:w-24 "
          src="/logo.png" alt="my image" />
      </Link>
    </>
  )
  /* return (
    <Link href="/" className="flex md:grid md:grid-cols-1 gap-0 text-white ">
      <div className="md:flex md:justify-center">
        <img
          className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
          src="/logo.png"
          alt="" />
      </div>
      <span className="flex self-center pl-4 p-0 text-center text-xl lg:hidden lg:text-xl tracking-tight">De Área a Área</span>
    </Link >
  ) */
}

export default Logo
