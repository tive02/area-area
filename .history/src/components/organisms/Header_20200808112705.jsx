import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (

  < header >
    <div>
      <div>
        <Link>
          <img src="" alt="" />
        </Link>
      </div>

      <NavLink className="bg-red-500">
        <ul>
          <li to="/src/components/pages/Home.jsx" > Inicio </li>
          <li to="/src/components/pages/Publications.jsx"  > Publicaciones</li>
          <li>Temas</li>
          <li> ¿Como contribuir?</li>

        </ul>

      </NavLink>
    </div>
  </header >

)



export default Header; 
