import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  <header className="mt-12">
    <div className="flex items-center justify-between flex-wrap bg-purple-700  p-6" >

      <NavLink exact to="/" className="flex items-center flex-no-shrink text-white mr-6">
        <svg class="h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 
          17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 
          0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 
          4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1
          17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 
          10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="text-xl tracking-tight">De Área a Área</span>
      </NavLink>



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
