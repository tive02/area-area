import React from 'react'
import Logo from '../atoms/Logo'
import IconYouTube from '../atoms/icons/IconYouTube'
import Button from '../atoms/Button'


const Footer = () => {
  return (
    <footer
      className="border-current border-2 bg-gray-700 
      grid grid-cols-1 lg:grid-cols-3 divide-white
      p-2 md:p-4 " >
      <div className=" b-t-4 border-white">
        <p className="text-white text-xl ">
          Siguenos en redes sociales.
        </p>
        <div className="flex m-4 ">
          <IconYouTube />

        </div>
        <div className="text-white text-sm">
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
            title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
              title="Flaticon"> www.flaticon.es</a>
        </div>
      </div>
      <div className="mb-8 ml-8 pt-4">
        <p className="text-white text-xl ">
          ¿Tienes algo que contar?</p>
        <div className="m-4">
          <Button
            bgColor="purple-700"
            hoverColor="green-400"
            borderColor="purple-700"
            label="Contactanos" />
        </div>
      </div>
      <div className="ml-8 pt-4">
        <Logo />
        <p className="text-white text-sm break-words" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </p>
        <span className="pt-4 text-white text-xs break-words">
          Todos los derechos reservados © 2020 | futbol femenino foundation</span>

      </div>
    </footer>
  )
}

export default Footer
