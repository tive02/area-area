import React, { Fragment } from "react";
import Link from "next/link";
import Button from "../atoms/Button";

const Form = () => {
  return (
    <>
      <form className="flex flex-col text-sm space-y-5">
        <div className="flex justify-between items-baseline flex-wrap">
          <label htmlFor="name">Nombre Completo </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Tus Nombres Completo"
            className="placeholder-green-800"
          />
        </div>
        <div className="flex justify-between items-baseline flex-wrap">
          <label htmlFor="email">Tú Email </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu Email"
            className="placeholder-green-800"
          />
        </div>
        <div className="flex justify-between items-baseline flex-wrap">
          <label htmlFor="password"> Tú Contraseña </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu Password"
            className="placeholder-green-800"
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
    </>
  );
};

export default Form;
