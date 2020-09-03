import React from 'react'
import Logo from '../atoms/Logo'
import IconYouTube from '../atoms/IconYouTube'


const Footer = () => {
  return (
    <div className="border-gray-800 bg-gray-700 md:flex md:flex-row">
      <div>
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
      <div className="">
        <p>¿Tienes algo que contar?</p>
        <button
        >
          contactanos
                </button>
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


    </div>
  )
}

export default Footer