import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

export default function createAccount() {
  return (
    <Fragment><Layout>
      <h1
            >
            Crear Cuenta
          </h1>
          <Formulario noValidate>
            <Campo>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
            </Campo>
            {errores.nombre && <Error>{errores.nombre}</Error>}
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
            </Campo>
            <InputSubmit type="submit" value="Crear Cuenta" />
          </Formulario>
    </Layout>
    </Fragment>
    
  );
}
