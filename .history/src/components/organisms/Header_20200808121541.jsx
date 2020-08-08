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
        <li> <NavLink to="/src/components/pages/Home.jsx"> Inicio</NavLink> </li>
        <li> <NavLink to="/src/components/pages/Publications.jsx">Publicaciones</NavLink> </li>
        <li> <NavLink to="/src/components/pages/Tags.jsx">Temas</NavLink> </li>
        <li> <NavLink to="/src/components/pages/Contribution.jsx">¿Como contribuir?</NavLink> </li>

      </ul>


    </div>
  </header >

)



export default Header; 
