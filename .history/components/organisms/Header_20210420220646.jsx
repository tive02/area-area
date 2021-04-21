import React from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import Seeker from "../molecules/Seeker";
import LogoResponsive from "../atoms/LogoResponsive";

const Header = () => (
  <header
    className="
  h-0.5
  divide-y divide-yellow-500
  w-full
  md:bg-purple-700 
  flex 
  items-center
  justify-between
  border-gray-800
  absolute inset-x-0 top-0 

    "
  >
    <div className="w-2/4 flex justify-center md:hidden bg-red-500">
      <LogoResponsive />
    </div>
    <div className=" hidden md:block md:w-2/6 lg:w-1/6">
      <Logo />
    </div>
    <div className="pl-4 w-2/12 lg:hidden absolute inset-y-0 right-0">
      <ButtonHamburguer />
    </div>
    <div className="md:w-full lg:w-2/5">
      <MenuPublic />
    </div>
    <div className="hidden lg:flex lg:justify-evenly lg:items-center lg:flex-row lg:w-4/6">
      <Seeker />
      <div>
        <Button
          bgColor="bg-green-400"
          hoverColor="bg-green-300"
          borderColor="border-green-400"
          label="Ingresa"
        />
        <Button
          bgColor="bg-green-400"
          hoverColor="bg-green-300"
          borderColor="border-green-400"
          label="Suscribete"
        />
      </div>
    </div>
  </header>
);

export default Header;
