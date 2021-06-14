import React, { useEffect, useState } from "react";

const useValidacion = (initialState, validar, fn) => {
  const [values, setValues] = useState(initialState);
  const [errors, guardarErrors] = useState({});
  const [submitForm, guardarSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errors).length === 0;
      if (noErrores) {
        fn(); // fn = función que se ejecuta en el componente
      }
      guardarSubmitForm(false);
    }
  }, [errors]);
  //Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(values);
    guardarErrors(erroresValidacion);
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
    handleSubmit,
    handleBlur,
  };
};

export default useValidacion;
