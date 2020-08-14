import React from 'react'
import Logo from '../atoms/Logo'
import IconYouTube from '../atoms/IconYouTube'
import Button from '../atoms/Button'


const Footer = () => {
  return (
    <footer
      className="border-gray-800 bg-gray-700 
      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
      " >
      <div className=" justify-center">
        <span className="text-white">
          Siguenos en redes sociales.
        </span>
        <div className="">
          <IconYouTube />
        </div>
        <div className="text-white">
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
            title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
              title="Flaticon"> www.flaticon.es</a>
        </div>
      </div>
      <div className="justify-center">
        <p className="text-white">
          ¿Tienes algo que contar?</p>
        <Button
          bgColor="purple-700"
          hoverColor="green-400"
          borderColor="purple-700"
          label="Contactanos" />
      </div>
      <div className="justify-center">
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
