import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  < header >
    <div>
      <div>
        <NavLink to="/" >

          <img
            src="/src/images/logo.png"
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
