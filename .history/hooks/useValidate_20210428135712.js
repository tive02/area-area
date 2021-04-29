import React, { useEffect, useState } from "react";

const useValidate = (initialState, validate, fn) => {
  const [values, setValores] = useState(initialState);
  const [errors, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const notErrors = Object.keys(errors).length === 0;
      if (notErrors) {
        fn(); // fn = función que se ejecuta en el componente
      }
      setSubmitForm(false);
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
  const manipulateSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };

  //Funcion que se ejecuta cuando se realiza el evento blur
  const handleBlur = () => {
    const erroresValidacion = validar(valores);
    setErrores(erroresValidacion);
  };
  return {
    valores,
    errors,
    handleChange,
    manipulateSubmit,
    handleBlur,
  };
};

export default useValidate;
