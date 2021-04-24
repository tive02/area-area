import React, { useState } from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import LogoResponsive from "../atoms/LogoResponsive";
import Seeker from "../molecules/Seeker";
import Form from "../molecules/Form";

const Header = () => {
  const [isCreateAccountVisible, setIsCreateAccountVisible] = useState(false);

  const toggleCreateAccount = () => {
    setIsCreateAccountVisible(true);
  };

  return (
    <header
      className="
      w-full
      bg-purple-700 
      border-black
      border-b-2
      h-24
      md:max-h-28
      md:flex 
      md:items-center
      md:justify-between
      sticky top-0
      
      "
    >
      <div className="w-2/4 flex justify-center md:hidden ">
        <LogoResponsive />
      </div>
      <div className=" hidden md:block md:w-2/6 lg:w-1/6 ">
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
        <div className="flex justify-end">
          <Button
            bgColor="bg-green-400"
            hoverColor="bg-green-300"
            borderColor="border-green-400"
            value="Iniciar Sesión"
            link="login"
          />

          <Button
            bgColor="bg-green-400"
            hoverColor="bg-green-300"
            borderColor="border-green-400"
            value="Crear Cuenta"
            link="create-account"
            onClick={toggleCreateAccount}
          />
          {isCreateAccountVisible && (
            <div className="bg-red-700 lg:pl-4 lg:w-2/12 lg:absolute lg:inset-y-0 lg:right-0">
              <Form />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
