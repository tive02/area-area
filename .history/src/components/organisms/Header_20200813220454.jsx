import React from 'react';

import MenuPublic from '../molecules/MenuPublic';
import ButtonHeader from '../molecules/ButtonHeader';
import Logo from '../atoms/Logo';



const Header = () => (

  <header>
    <div className="flex items-center justify-between flex-wrap bg-purple-700  p-6 border-gray-800" >
      <Logo />

      <div className="block lg:hidden">
        <button className="md:hidden focus:outline-none focus:shadow-outline" >
          <svg className="w-10 h-10 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            /></svg>
        </button>
      </div>
      <nav>
        <MenuPublic />
      </nav>


      <div className="flex-col flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end lg:flex-row" >
        <ButtonHeader />

      </div>
    </div>
  </header >

)



export default Header; 
