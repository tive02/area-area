import React, { Fragment, useState } from "react";
import classnames from "classnames";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Button from "../atoms/Button";
import IconGmail from "../atoms/icons/IconGmail";
import IconTwitter from "../atoms/icons/IconTwitter";
import IconFacebook from "../atoms/icons/IconFacebook";

import useValidate from "../../hooks/useValidate";
const STATE_INITIAL = {
  nombre: "",
  email: "",
  password: "",
};

const Form = ({ hidden, title, valueInput }) => {
  //Debuggin useForm of library react-hook-form
  const { register, formState, handleSubmit } = useForm({
    criteriaMode: "all",
  });

  const { errors } = formState;
  //funcion cuando el usuario hace submit al formulario
  const onSubmit = (data) => console.log(data);
  //State para los errores
  const [error, setError] = useState(false);

  const {
    valores,
    errores,
    handleChange,
    manipulateSubmit,
    handleBlur,
  } = useValidate(STATE_INITIAL, validarCrearCuenta, CrearCuenta);

  const { nombre, email, password } = valores;

  async function CrearCuenta() {
    try {
      await firebase.registrar(nombre, email, password);
      Router.push("/");
    } catch (error) {
      console.error("Existio un error", error.message);
      setError(error.message);
    }
  }
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
                {...register("name", { required: "Este campo es obligatorio" })}
              />
              <ErrorMessage errors={errors} name="name" />
            </div>
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
                {...register("email", {
                  required: "El email es obligatorio.",
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Por favor, ingresa un email valido.",
                  },
                })}
              />
            </div>

            <ErrorMessage errors={errors} name="email">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            </ErrorMessage>
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
                {...register("password", {
                  required: "La Contraseña es obligatoria.",
                  minLength: {
                    value: 6,
                    message:
                      "La contraseña debe tener como minimo 6 Caracteres.",
                  },
                })}
              />
            </div>
            <ErrorMessage errors={errors} name="password">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <p key={type}>{message}</p>
                ))
              }
            </ErrorMessage>
            <div className="flex justify-center p-2">
              <Button
                bgColor="bg-green-400"
                borderColor="border-gray-700"
                value={valueInput}
              >
                <input type="submit" />
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Form;
