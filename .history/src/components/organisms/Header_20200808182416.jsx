import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (

  <header>
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
        <span className="text-xl tracking-tight">De Área a Área</span>
      </NavLink>

      <div className="block lg:hidden">
        <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onclick="open = !open" >
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            /></svg>
        </button>
      </div>
      <div>
        <ul : {'flex': open, 'hidden': !open}"
        classname="flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
          <li> <NavLink exat to="/"> Inicio</NavLink> </li>
        <li> <NavLink to="/Publications">Publicaciones</NavLink> </li>
        <li> <NavLink to="/Tags">Temas</NavLink> </li>
        <li> <NavLink to="/Contribution">¿Como contribuir?</NavLink> </li>
        </ul>
    </div>



    </div>
  </header >

)



export default Header; 
