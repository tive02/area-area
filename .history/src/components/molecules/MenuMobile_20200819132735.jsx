import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const MenuMobile = () => {
  return (
    <nav className="bg-purple-600 absolute right-0 inset-y-0  p-4 ">
      <ul className="mb-4 flex-1 self-center" >
        <li> <NavLink className="text-lg font-semibold text-black-400 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          exat to="/"> Inicio</NavLink> </li>
        <li> <NavLink className="text-lg font-semibold text-black-400 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Tags">Temas</NavLink> </li>
        <li> <NavLink className="text-lg font-semibold text-black-400 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Team"> Team</NavLink> </li>
        <li> <NavLink className="text-lg font-semibold text-black-400 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Contribution">¿Como contribuir?</NavLink> </li>
      </ul>
      <Button
        bgColor="green-400"
        hoverColor="green-400"
        borderColor="green-400"
        label="Ingresa" />
      <Button
        bgColor="green-400"
        hoverColor="green-400"
        borderColor="green-400"
        label="Suscribete" />
    </nav>
  )
}

export default MenuMobile
