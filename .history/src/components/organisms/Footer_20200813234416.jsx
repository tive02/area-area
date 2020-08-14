import React from 'react'
import Logo from '../atoms/Logo'
import { Facebook, TikTok, Twitter, Linkedin, YouTube } from '../atoms/Icons'

const Footer = () => {
  return (
    <div className="border-gray-800 bg-gray-700 md:flex md:flex-row">
      <div className="md:justify-start ">
        <Logo />
        <span className="text-white" >
          Somos una organización que busca empoderar y mostrar el futbol femenino en latinoamerica
        </span>
      </div>
      <div>
        <span className="text-white">
          Siguenos en redes sociales.
        </span>
        <div>
          <Facebook />
          <TikTok />
          <Twitter />
          <Instragram />
          <Linkedin />
          <YouTube />

        </div>
        <div>
          Iconos diseñados por <a href="https://www.flaticon.es/autores/freepik"
            title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/"
              title="Flaticon"> www.flaticon.es</a>
        </div>

      </div>
      <div>

      </div>
    </div>
  )
}

export default Footer
