import React from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import Seeker from "../molecules/Seeker";

const Header = () => (
  <header
    className="
  w-full
  bg-purple-700 
  flex 
  items-center
  justify-between
  border-gray-800
  absolute inset-x-0 top-0 

    ">
    <div className=" w-2/4 flex justify-center md:w-2/6 lg:w-1/6">
      <Logo />
    </div>
    <ButtonHamburguer />
    <div className="md:w-full lg:w-2/5">
      <MenuPublic />
    </div>
    <div className="bg-blue-500 hidden lg:flex lg:justify-around lg:flex-row lg:w-4/6">
      <Seeker />
      <Button
        bgColor="green-400"
        hoverColor="green-400"
        borderColor="green-400"
        label="Ingresa"
      />
      <Button
        bgColor="green-400"
        hoverColor="green-400"
        borderColor="green-400"
        label="Suscribete"
      />
    </div>
  </header>
);

export default Header;
