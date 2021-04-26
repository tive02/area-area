import React, { Fragment, useEffect } from "react";
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
    errors,
    // Read the formState before render to subscribe the form state through the Proxy
    formState: { isDirty, isSubmitting, touched, submitCount },
  } = useForm();
  const onSubmit = (data: FormInputs) => console.log(data);

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
            {errors.name && "First name is required"}
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
            {errors.email && "email is required"}
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
            {errors.pasword && "contraseña is required"}
            <div className="flex justify-center p-2">
              {/* <Button
                bgColor="bg-green-400"
                borderColor="border-gray-700"
                value={valueInput}
              >
                
              </Button> */}
              <input type="submit" />
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
