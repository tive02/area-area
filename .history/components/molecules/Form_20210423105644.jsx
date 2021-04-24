import React, { Fragment } from "react";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 place-content-center place-items-center bg-green-100">
        <h1 className="text-center text-2l">Crea una Cuenta</h1>
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
