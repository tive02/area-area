import React from 'react'
import Logo from '../atoms/Logo'
import IconYouTube from '../atoms/IconYouTube'
import Button from '../atoms/Button'


const Footer = () => {
  return (
    <footer
      className="border-gray-800 bg-gray-700 
      grid grid-cols-1 lg:grid-cols-3
      " >
      <div className=" ">
        <p className="text-white text-xl ml-8 ">
          Siguenos en redes sociales.
        </p>
        <div className="flex ml-8 ">
          <IconYouTube />
          <IconYouTube />
          <IconYouTube />
          <IconYouTube />
        </div>
        <div className="text-white text-sm ml-8">
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
            title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
              title="Flaticon"> www.flaticon.es</a>
        </div>
      </div>
      <div className="">
        <p className="text-white text-center">
          ¿Tienes algo que contar?</p>
        <div className="">
          <Button
            bgColor="purple-700"
            hoverColor="green-400"
            borderColor="purple-700"
            label="Contactanos" />
        </div>
      </div>
      <div className=" ">
        <Logo />
        <p className="text-white" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </p>
        <div >
          <span>Todos los derechos reservados © 2020 | futbol femenino foundation</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
