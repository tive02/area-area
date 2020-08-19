import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const MenuMobile = () => {
  return (
    <nav className="mb-4 bg-purple-600 fixed inset-0 p-4">
      <div className="m-8">
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
      </div>
      <ul className="m-8 ">
        <li> <NavLink className="text-2xl font-semibold text-black max-w-screen-md
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow"
          exat to="/"> Inicio</NavLink> </li>
        <li> <NavLink className="text-2xl font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Tags">Temas</NavLink> </li>
        <li> <NavLink className="text-2xl font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Team"> Team</NavLink> </li>
        <li> <NavLink className="text-2xl font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          to="/Contribution">¿Como contribuir?</NavLink> </li>
      </ul>
    </nav >
  )
}

export default MenuMobile
