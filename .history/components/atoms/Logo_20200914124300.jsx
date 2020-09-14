import React from 'react'
import Link from 'next/link'



function Logo() {
  return (
    <>
      <div className="flex justify-items-center md:grid md:grid-cols-1 gap-0 text-white ">
        <Link href="/" className="flex items-center md:justify-center">
          <img
            className="rounded-full h-16 w-16 lg:h-16 lg:w-16 "
            src="/logo.png"
            alt="" />
        </Link >
        <Link href="/" className="items-center">
          <span className="pl-4 pt-4 text-3xl lg:text-xl tracking-tight">
            De Área a Área</span>
        </Link>
      </div>
    </>
  )
}

export default Logo
