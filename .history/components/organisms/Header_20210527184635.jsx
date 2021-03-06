import React, { Fragment, useContext } from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import ButtonSubmit from "../atoms/ButtonSubmit";
import LogoResponsive from "../atoms/LogoResponsive";
import Seeker from "../molecules/Seeker";
import { FirebaseContext } from "../../firebase";
import ModalLogin from "../molecules/ModalLogin";

const Header = () => {
  const { user, firebase } = useContext(FirebaseContext);
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
      z-50
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

        {user ? (
          <>
            <div className="flex justify-end items-baseline">
              <p className="pr-2">Hola: {user.displayName}</p>

              <ButtonSubmit
                bgColor="bg-green-400"
                borderColor="border-gray-700"
                value="Cerrar Sesión"
                onClick={() => firebase.outLogin()}
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-end">
              <ModalLogin />
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
