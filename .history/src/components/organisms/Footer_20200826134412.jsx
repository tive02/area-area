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
      <div className=" border-b-2 border-white p-2 lg:border-r-4 lg:p-4 lg:border-b-0">
        <p className="text-white text-xl text-justify">
          Siguenos en redes sociales.
        </p>
        <div className="flex justify-center ">
          <IconInstagram />
          <IconTikTok />
          <IconSpotify />
          <IconYouTube />
          <IconTwitter />
          <IconLinkedin />

        </div>
        <div className="text-white text-sm text-justify">
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
            title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
              title="Flaticon"> www.flaticon.es</a>
        </div>
      </div>
      <div className="border-b-2 border-white p-2 lg:border-r-4  lg:p-4 lg:border-b-0">
        <p className="text-white text-xl text-center">
          ¿Tienes algo que contar?</p>
        <div className="flex justify-center ">
          <Button
            bgColor="purple-700"
            hoverColor="green-400"
            borderColor="purple-700"
            label="Contactanos" />
        </div>
      </div>
      <div className="border-white border-b-2  p-2 lg:border-r-4 lg:p-4 lg:border-b-0">
        <div className="flex justify-center">
          <Logo />
        </div>
        <p className="text-white text-sm break-words text-justify" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </p>
        <span className="pt-4 text-white text-xs break-words text-justify">
          Todos los derechos reservados © 2020 | De Área a Área</span>

      </div>

    </footer>
  )
}

export default Footer
