import React from 'react'
import Link from 'next/link'

export const MenuPublic = () => {
  return (
    <ul className="flex-col flex-grow p-4 md:pb-0 hidden md:flex md:justify-start md:flex-row">
      <li> <Link href="/">
        <div className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 bg-green-400 
          focus:outline-none focus:shadow-outline"
        >Inicio
      </div>
      </Link>
      </li>
      <li> <Link href="/tags/Tags">
        <div className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        >Temas
      </div>
      </Link>
      </li>
      <li> <Link href="/about/About">
        <div className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        >Nosotros
      </div>
      </Link>
      </li>
      <li> <Link href="/contribution/Contribution">
        <div className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        >¿Como contribuir?
      </div>
      </Link>
      </li>
    </ul>
  )
}

export default MenuPublic
