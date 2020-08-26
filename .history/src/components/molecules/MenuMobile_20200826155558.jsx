import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'

const MenuMobile = () => {
  return (
    <nav className="bg-purple-700 fixed inset-y-0 right-0 p-4 
    transition duration-1000 ease-in-out">
      <div className="mt-16 ml-8">
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
        <NavLink className="text-2xl font-semibold text-black"
          exat to="/"><li className="mt-6
        hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 
        focus:bg-green-400 focus:outline-none focus:shadow">
            Inicio </li></NavLink>
        <NavLink className="text-2xl font-semibold text-black"
          to="/Tags">
          <li className=" mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Temas</li></NavLink>
        <NavLink className="text-2xl font-semibold text-black"
          to="/Team"><li className="mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Team</li></NavLink>
        <NavLink className="text-2xl font-semibold text-black"
          to="/Contribution"><li className="mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            ¿Como contribuir?</li></NavLink>
      </ul>
    </nav >
  )
}

export default MenuMobile
