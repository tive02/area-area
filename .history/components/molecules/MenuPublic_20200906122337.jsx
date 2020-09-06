import React from 'react'
import LInk from 'next/link'

export const MenuPublic = () => {
  return (
    <ul className="flex-col flex-grow p-4 md:pb-0 hidden md:flex md:justify-start md:flex-row">
      <li> <Link className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        href="/index"> Inicio</Link> </li>
      <li> <Link className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        href="/Tags">Temas</Link> </li>
      <li> <Link className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        href="/Team">Nuestro Equipo</Link> </li>
      <li> <Link className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        href="/Contribution">¿Como contribuir?</Link> </li>
    </ul>
  )
}

export default MenuPublic
