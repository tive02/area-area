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
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <div
        className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto border-double 
        p-4 border-4 border-gray-800
      "
      >
        <div className="flex p-4 justify-around">
          <h1 className=" text-center text-2xl">
            {title}
            <span className="text-2xl text-purple-800"> de Area a Area</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 w-auto ">
          <h2>Con tus cuentas Favoritas </h2>
          <div className="flex flex-row justify-between ">
            <IconGmail />
            <IconFacebook />
            <IconTwitter />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
                className="placeholder-green-800"
                {...register("name")}
              />
            </div>
            {errors.name && <p>{errors.name.message}</p>}
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
                {...register("email")}
              />
            </div>
            {errors.email && <p>{errors.email.message}</p>}
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
                {...register("password")}
              />
            </div>
            {errors.password && <p>{errors.password.message}</p>}
            <div className="flex justify-center p-2">
              <Button
                bgColor="bg-green-400"
                borderColor="border-gray-700"
                value={valueInput}
                onClick={() => {
                  [
                    {
                      type: "manual",
                      name: "name",
                      message: "El Nombre es Obligatorio",
                    },
                    {
                      type: "manual",
                      name: "email",
                      message: "El Email es Obligatorio",
                    },
                    {
                      type: "manual",
                      name: "password",
                      message: "La Contraseña es Obligatoria",
                    },
                  ].forEach(({ name, type, message }) =>
                    setError(name, { type, message })
                  );
                }}
              />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
