import React from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import Seeker from "../molecules/Seeker";

const Header = () => (
  <header
    className="
  inset-x-0 top-0
  inset-x-0 top-0 w-full
  bg-purple-700 
  flex items-center
    ">
    <div
      className="  justify-between border-gray-800
  p-2 lg:p-6">
      <Logo />
      <ButtonHamburguer />
      <MenuPublic />
    </div>

    <div className="flex-col flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end lg:flex-row">
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
