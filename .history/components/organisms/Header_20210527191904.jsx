import React, { Fragment, useContext } from "react";
import MenuPublic from "../molecules/MenuPublic";
import Logo from "../atoms/Logo";
import ButtonHamburguer from "../atoms/ButtonHamburguer";
import ButtonSubmit from "../atoms/ButtonSubmit";
import LogoResponsive from "../atoms/LogoResponsive";
import { FirebaseContext } from "../../firebase";
import ModalLogin from "../molecules/ModalLogin";
import Searcher from "../molecules/Searcher";
import Seeker from "../atoms/icons/Seeker";

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
      <div className="absolute inset-x-52 top-7 lg:hidden">
        <Seeker />
      </div>
      <div className="hidden md:flex md:justify-evenly md:items-center md:flex-row md:w-4/6">
        <div className="hidden lg:flex">
          <Searcher />
        </div>
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
