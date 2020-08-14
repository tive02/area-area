import React from 'react'
import Logo from '../atoms/Logo'
import IconYouTube from '../atoms/IconYouTube'


const Footer = () => {
  return (
    <div className="border-gray-800 bg-gray-700 md:flex md:flex-row">
      <div className="md:justify-start ">
        <Logo />
        <span className="text-white" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </span>
        <div class="bg-gray-500 w-1/5">
        <p>Todos los derechos reservados © 2020 | futbol femenino foundation</p>
      </div>
      </div>
      <div class="bg-gray-500 text-center w-3/5">
        <p>¿Tienes algo que contar?</p>
        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          contactanos
                </button>
      </div>
      
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

    </div>
  )
}

export default Footer
