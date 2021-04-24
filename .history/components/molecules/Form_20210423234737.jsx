import React, { Fragment } from "react";
import Link from "next/link";
import Button from "../atoms/Button";

const Form = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto">
        <div className="flex p-4 justify-around">
          <h1 className=" text-center text-xl">
            Crea tu cuenta en
            <span className="text-lg text-purple-800"> de Area a Area</span>
          </h1>
        </div>
        <form className="flex flex-col text-sm space-y-5">
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="name">Nombres </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tus Nombres Completo"
              className="placeholder-green-400"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              className="placeholder-green-400"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              className="placeholder-green-400"
            />
          </div>
          <div className="flex flex-row justify-between items-center flex-grow">
            <label htmlFor="confirmar" className="flex-shrink pr-2">
              Confirma el Password
            </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Pasword"
              className="placeholder-green-300"
            />
          </div>
          <div className="flex justify-center ">
            <Button
              bgColor="bg-green-400"
              borderColor="border-gray-700"
              value="Registrate"
            >
              {/* <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Registrarme"
              /> */}
            </Button>
          </div>
        </form>
        <div className="p-2.5">
          <Button
            bgColor="bg-purple-700"
            borderColor="border-gray-700"
            value="Inicia Sesión"
            link="/login"
          />
        </div>
      </div>
    </>
  );
};

export default Form;
