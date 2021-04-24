import React, { Fragment } from "react";
import classnames from "classnames";
import Link from "next/link";
import Button from "../atoms/Button";

const Form = ({ hidden, title }) => {
  return (
    <>
      <div
        className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto 
      lg:pl-4 lg:w-2/12 lg:absolute lg:inset-y-0 lg:right-0"
      >
        <div className="flex p-4 justify-around">
          <h1 className=" text-center text-xl">
            {title}
            <span className="text-lg text-purple-800"> de Area a Area</span>
          </h1>
        </div>
        <form className="flex flex-col text-sm space-y-5">
          <div
            className={classnames(
              `flex justify-between items-baseline flex-wrap ${hidden} `
            )}
          >
            <label htmlFor="name">Nombre Completo </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tus Nombres Completo"
              className="placeholder-green-800 pl-2"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap ">
            <label htmlFor="email">Tú Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              className="placeholder-green-800 pl-2"
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="password"> Tú Contraseña </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              className="placeholder-green-800 pl-2"
            />
          </div>

          <div className="flex justify-center ">
            <Button
              bgColor="bg-green-400"
              borderColor="border-gray-700"
              value="Registrate"
            >
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Registrarme"
              />
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
