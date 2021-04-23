import React, { Fragment } from "react";

const Form = () => {
  return (
    <>
      <h1>Iniciar Sesión</h1>
      <form noValidate>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Tu Email" name="email" />
        </div>

        <div>
          <label htmlFor="password"> Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Tu Password"
            name="password"
          />
        </div>
        <input type="submit" value="Iniciar Sesión" />
      </form>
    </>
  );
};

export default Form;
