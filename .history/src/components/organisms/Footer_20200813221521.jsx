import React from 'react'
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <div className="border-gray-800 bg-gray-700">
      <div>
        <Logo />
        <span className="text-white" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </span>
        <span className="text-white">
          Siguenos en redes sociales.
      </span>
      </div>

    </div>
  )
}

export default Footer