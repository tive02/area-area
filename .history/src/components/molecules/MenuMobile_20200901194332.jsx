import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../atoms/Button'
import MenuPublic from './MenuPublic'

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
      <MenuPublic />
    </nav >
  )
}

export default MenuMobile
