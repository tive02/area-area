import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const MenuMobile = () => {
  return (
    <div className="bg-purple-600">

      <nav className="mb-4 bg-blue-500 fixed inset-0 p-4 flex-1  items-center ">
        <div className=" bg-orange-500 relative inset-x-0 top-0">
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
        <ul className="bg-red-500">
          <li> <NavLink className="text-lg font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            exat to="/"> Inicio</NavLink> </li>
          <li> <NavLink className="text-lg font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Tags">Temas</NavLink> </li>
          <li> <NavLink className="text-lg font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Team"> Team</NavLink> </li>
          <li> <NavLink className="text-lg font-semibold text-black 
          hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Contribution">¿Como contribuir?</NavLink> </li>
        </ul>

      </nav>
    </div>
  )
}

export default MenuMobile