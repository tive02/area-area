import React from 'react';
import MenuPublic from '../molecules/MenuPublic';
import Logo from '../atoms/Logo';
import Button from '../atoms/Button';
import ButtonHamburguer from '../atoms/ButtonHamburguer';

const Header = () => (

  <header>
    <div className="flex items-center justify-between flex-wrap bg-purple-700  p-6 border-gray-800" >
      <Logo />
      <div className="block lg:hidden">
        <ButtonHamburguer />
      </div>
      <nav>
        <MenuPublic />
      </nav>
      <div className="flex-col flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end lg:flex-row" >
        <Button
          bgColor="green-400"
          hoverColor="green-400"
          borderColor="green-400"
          label="Ingresa" />
        <Button
          bgColor="green-400"
          hoverColor="green-400"
          borderColor="green-400"
          label="Suscribete" />

      </div>
    </div>
  </header >

)



export default Header; 
