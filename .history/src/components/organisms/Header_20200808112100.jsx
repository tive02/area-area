import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (

  < header >
    <div>
      <div>
        <Link>

        </Link>
      </div>

      <NavLink to="/about" className="bg-red-500">
        <ul>
          <li> Inicio </li>
          <li> Publicaciones</li>
          <li>Temas</li>
          <li> ¿Como contribuir?</li>

        </ul>

      </NavLink>
    </div>
  </header >

)



export default Header; 
