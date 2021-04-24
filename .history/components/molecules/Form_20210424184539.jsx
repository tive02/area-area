import React, { Fragment } from "react";
import classnames from "classnames";
import Link from "next/link";
import Button from "../atoms/Button";
import IconGmail from "../atoms/icons/IconGmail";
import IconTwitter from "../atoms/icons/IconTwitter";
import IconFacebook from "../atoms/icons/IconFacebook";

const Form = ({ hidden, title, valueInput }) => {
  return (
    <>
      <form
        className="grid grid-cols-1 gap-2 place-content-start place-items-center h-auto border-double 
        p-4 border-4 border-gray-800
      "
      >
        <legend className="flex p-4 justify-around">
          <h1 className=" text-center text-xl">
            {title}
            <span className="text-lg text-purple-800"> de Area a Area</span>
          </h1>
        </legend>
        <fieldset className="grid grid-cols-1 w-auto">
          <legend>Con tus cuentas Favoritas </legend>
          <div className="flex flex-row justify-around ">
            <IconGmail />
            <IconFacebook />
            <IconTwitter />
          </div>
        </fieldset>
        <fieldset className="flex flex-col text-sm space-y-5">
          <legend></legend>
          <div
            className={classnames(
              `flex justify-between items-baseline flex-wrap ${hidden} `
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
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap ">
            <label htmlFor="email" className="pr-2">
              Tú Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              className="placeholder-green-800 "
            />
          </div>
          <div className="flex justify-between items-baseline flex-wrap">
            <label htmlFor="password" className="pr-2">
              Tú Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              className="placeholder-green-800 "
            />
          </div>

          <div className="flex justify-center ">
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
