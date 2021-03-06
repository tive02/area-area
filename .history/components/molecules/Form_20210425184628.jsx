import React, { Fragment } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "../atoms/Button";
import IconGmail from "../atoms/icons/IconGmail";
import IconTwitter from "../atoms/icons/IconTwitter";
import IconFacebook from "../atoms/icons/IconFacebook";

const Form = ({ hidden, title, valueInput }) => {
  //Debuggin useForm of library react-hook-form
  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
  });
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  const registerOptions = {
    name: { required: "Nombre es obligatorio" },
    email: { required: "Email es obligatorio" },
    password: {
      required: "La contraseña es obligatorio",
      minLength: {
        value: 8,
        message: "La contraseña debe ser de al menos 8 Caracteres",
      },
    },
  };
  return (
    <>
      <form
        className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto border-double 
        p-4 border-4 border-gray-800
      "
        onSubmit={handleSubmit(handleRegistration, handleError)}
      >
        <legend className="flex p-4 justify-around">
          <h1 className=" text-center text-2xl">
            {title}
            <span className="text-2xl text-purple-800"> de Area a Area</span>
          </h1>
        </legend>
        <fieldset className="grid grid-cols-1 w-auto ">
          <legend>Con tus cuentas Favoritas </legend>
          <div className="flex flex-row justify-between ">
            <IconGmail />
            <IconFacebook />
            <IconTwitter />
          </div>
        </fieldset>
        <fieldset className="grid grid-cols-1 w-auto text-sm space-y-5 border-dotted border-4 border-gray-800">
          <legend className="justify-self-auto text-xl ">
            O tu Correo Electrónico
          </legend>
          <div
            className={classnames(
              `flex justify-between items-baseline flex-wrap p-2 ${hidden} `
            )}
          >
            <label htmlFor="name" className="pr-2">
              Nombre Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu Nombre Completo"
              className="placeholder-green-800 "
              innerRef={register(registerOptions.name)}
            />
          </div>
          {errors.name && errors.name.message}
          <div className="flex justify-between items-baseline flex-wrap p-2">
            <label htmlFor="email" className="pr-2">
              Tú Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              className="placeholder-green-800 "
              innerRef={register(registerOptions.email)}
            />
          </div>
          {errors.email && errors.email.message}
          <div className="flex justify-between items-baseline flex-wrap p-2">
            <label htmlFor="password" className="pr-2">
              Tú Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              className="placeholder-green-800 "
              innerRef={register(registerOptions.password)}
            />
          </div>
          {errors.password && errors.password.message}
          <div className="flex justify-center p-2">
            <Button
              bgColor="bg-green-400"
              borderColor="border-gray-700"
              value={valueInput}
            >
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value={valueInput}
              />
            </Button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default Form;
