import React, { useEffect, useState } from "react";

const useValidate = (initialState, validate, fn) => {
  const [valores, guardarValores] = useState(initialState);
  const [errores, guardarErrores] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;
      if (noErrores) {
        fn(); // fn = función que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, [errores]);
  //Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    guardarValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cuando el usuario hace submit
  const manipulateSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
    guardarSubmitForm(true);
  };

  //Funcion que se ejecuta cuando se realiza el evento blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    guardarErrores(erroresValidacion);
  };
  return {
    valores,
    errores,
    handleChange,
    manipulateSubmit,
    handleBlur,
  };
};

export default useValidate;
