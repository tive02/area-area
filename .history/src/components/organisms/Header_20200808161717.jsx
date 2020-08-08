import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  <header>
    <div className="flex items-center justify-between flex-wrap bg-green-700  p-6" >
      <div>
        <NavLink to="/" >

          {/*  <img
            src="images/logo.png"
            alt="Logo de fútbol femenino"
            className="" /> */}
        </NavLink>

      </div>

      <ul>
        <li> <NavLink exat to="/"> Inicio</NavLink> </li>
        <li> <NavLink to="/Publications">Publicaciones</NavLink> </li>
        <li> <NavLink to="/Tags">Temas</NavLink> </li>
        <li> <NavLink to="/Contribution">¿Como contribuir?</NavLink> </li>

      </ul>


    </div>
  </header >

)



export default Header; 
