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
        <button className="md:hidden
        focus:outline-none focus:shadow-outline" >
          <svg className="w-10 h-10 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            /></svg>
        </button>
      </div>
      <div>
        <ul

          className="
          flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-start md:flex-row">
          <li> <NavLink className=".menu-nav
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-200 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            exat to="/"> Inicio</NavLink> </li>
          <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-200 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Tags">Temas</NavLink> </li>
          <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-200 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Team"> Team</NavLink> </li>

          <li> <NavLink className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-200 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            to="/Contribution">¿Como contribuir?</NavLink> </li>
        </ul>
      </div>
      <div className="flex-col flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end lg:flex-row" >
        <div>
          <button
            class="mr-8 bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 border-b-4 
              border-green-400 hover:border-black rounded">
            <label for="">Ingresa</label>
          </button>
        </div>
        <div>
          <button
            class="mr-8 bg-green-200 hover:bg-green-400 text-black font-bold py-2 px-4 border-b-4 
            border-green-400 hover:border-black rounded">
            <label for="">Subscribete</label>
          </button>
        </div>
      </div>



    </div>
  </header >

)



export default Header; 
