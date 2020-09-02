import React from 'react'
import { NavLink } from 'react-router-dom'

export const MenuPublic = () => {
  return (
    <ul className="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-start md:flex-row">
      <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        exat to="/"> Inicio</NavLink> </li>
      <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        to="/Tags">Temas</NavLink> </li>
      <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        to="/Team">Nuestro Equipo</NavLink> </li>
      <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        to="/Contribution">¿Como contribuir?</NavLink> </li>
    </ul>
  )
}

export default MenuPublic
