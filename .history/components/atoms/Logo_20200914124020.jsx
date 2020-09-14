import React from 'react'
import Link from 'next/link'



function Logo() {
  /* return (
    <>
      <Link href="/" className="flex justify-center md:grid md:grid-cols-1 gap-0 ">
        <img className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
          src="/logo.png" alt="my image" />
      </Link>
      <Link href="/">
        <span className="flex self-center pl-4 p-0 text-center text-xl lg:hidden lg:text-xl tracking-tight">De Área a Área</span>
      </Link>
    </>
  ) */
  return (
    <>
      <div className="flex justify-items-center md:grid md:grid-cols-1 gap-0 text-white ">
        <Link href="/" className="flex items-center md:justify-center">
          <img
            className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
            src="/logo.png"
            alt="" />
        </Link >
        <Link href="/" className="bg-orange-400">
          <span className="bg-red-500 items-center pl-4 p-0 text-xl lg:text-xl tracking-tight">De Área a Área</span>
        </Link>
      </div>
    </>
  )
}

export default Logo
