import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  < header >
    <div>
      <div>
        <NavLink>
          <img
            src="/public/images/logo.svg"
            alt="Logo de fútbol femenino"
            className="" />
        </NavLink>

      </div>

      <ul>
        <li>  Inicio </li>
        <li> Publicaciones</li>
        <li>Temas</li>
        <li> ¿Como contribuir?</li>

      </ul>


    </div>
  </header >

)



export default Header; 
