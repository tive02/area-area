import React from 'react'
import Link from 'next/link'
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
        <Link href="/">
          <li className="mt-6 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 
        focus:bg-green-400 focus:outline-none focus:shadow">
            Inicio </li>
        </Link>
        <Link href="tags/Tags" replace>
          <li className=" mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Temas</li></Link>
        <Link href="about/About" replace>
          <li className="mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Team</li></Link>
        <Link href="/contribution/Contribution" replace>
          <li className="mt-2 text-2xl font-semibold text-black
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            ¿Como contribuir?</li></Link>
      </ul>
    </nav >
  )
}

export default MenuMobile
