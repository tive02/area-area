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
              placeholder="Tu Nombres Completo"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
            />
          </div>
          <div className="flex flex-row justify-between items-center flex-grow">
            <label htmlFor="confirmar" className="flex-shrink pl-2">
              Confirma el Password
            </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Pasword"
            />
          </div>
          <div className="flex justify-center ">
            <Button
              bgColor="bg-green-400"
              hoverColor="bg-green-300"
              borderColor="border-green-400"
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

        <Button
          bgColor="bg-purple-700"
          hoverColor="bg-green-400"
          borderColor="border-purple-700"
          value="Inicia Sesión"
          link="/login"
        />
      </div>
    </>
  );
};

export default Form;
