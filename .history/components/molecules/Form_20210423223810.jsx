import React, { Fragment } from "react";
import Link from "next/link";

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
        {/* formulario de registro */}
        <form className="bg-blue-100 flex flex-col  text-base ">
          <div className="flex justify-between items-baseline">
            <label htmlFor="name">Nombres </label>
            <input type="text" name="name" placeholder="Tus Nombres" />
          </div>
          <div className="flex justify-between items-baseline">
            <label htmlFor="lastName">Apellidos </label>
            <input type="text" name="lastName" placeholder="Tus Apellidos" />
          </div>
          <div className="flex justify-between items-baseline">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="flex justify-between items-baseline">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
            />
          </div>
          <div className="flex justify-between items-baseline">
            <label htmlFor="confirmar">Confirmar Password </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Pasword"
            />
          </div>
          <div className="flex justify-between items-baseline">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>

        <Link href="/login">
          <a>Volver a Iniciar Sesión</a>
        </Link>
      </div>
    </>
  );
};

export default Form;
