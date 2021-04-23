import React, { Fragment } from "react";
import Link from "next/link";

const Form = () => {
  return (
    <>
      <div className="">
        <div className="">
          <h1>Crea una Cuenta</h1>
          <form>
            <div className="">
              <label htmlFor="nombre">Nombre </label>
              <input
                type="nombre"
                id="nombre"
                name="nombre"
                placeholder="Tu Nombre"
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
      </div>
    </>
  );
};

export default Form;
