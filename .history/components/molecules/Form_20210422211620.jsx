import React, { Fragment } from "react";

const Form = () => {
  return (
    <>

     <h1  >
            Crear Cuenta
          </h1>
          <form noValidate>
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu Nombre"
                name="nombre"
                />
            </div>
            {errores.nombre && <Error>{errores.nombre}</Error>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Tu Email"
                name="email"
            </div> <div>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                placeholder="Tu Password"
                name="password"
            </div>
            <input type="submit" value="Crear Cuenta" />
          </form>
    </>
  );
};

export default Form;
