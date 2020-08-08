import React from 'react';
import { NavLink } from 'react-router-dom';
import { logo } from '../atoms/Logo'

const Header = () => (

  <header>
    <div className="flex items-center justify-between flex-wrap bg-purple-700  p-6" >
      <div>
        const App = () => {
 return (
 < div>
          <SearchBar />
        </div>
 );
}
      </div>

      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-lighter 
                          border-teal-light hover:text-white hover:border-white">
          <svg className="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            /></svg>
        </button>
      </div>
      <div>
        <ul>
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
