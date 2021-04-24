import React, { Fragment } from "react";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 place-content-start place-items-center bg-green-100">
        <div>
          <h1 className="text-center text-xl">Crea una Cuenta</h1>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
        </div>
        <form className="bg-blue-100 ">
          <div className="">
            <label htmlFor="name">Nombres </label>
            <input type="name" id="name" name="name" placeholder="Tu Nombre" />
          </div>
          <div className="">
            <label htmlFor="lastName">Apellidos </label>
            <input
              type="lastName"
              id="lastName"
              name="lastName"
              placeholder="Tu apellido"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password </label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Pasword"
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarme"
            />
          </div>
        </form>
        <Link href="/">
          <a>Volver a Iniciar Sesión</a>
        </Link>
      </div>
    </>
  );
};

export default Form;
