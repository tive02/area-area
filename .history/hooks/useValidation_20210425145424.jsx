import React, { useEffect, useState } from "react";

const useValidacion = (initialState, validate, fn) => {
  const [value, setValue] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const notErrors = Object.keys(errors).length === 0;
      if (notErrors) {
        fn(); // fn = función que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, [errores]);
  //Función que se ejecuta conforme el usuario escribe algo
  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que se ejecuta cuando el usuario hace submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidate = validate(value);
    setErrors(erroresValidate);
    setSubmitForm(true);
  };

  //Funcion que se ejecuta cuando se realiza el evento blur
  const handleBlur = () => {
    const errorsValidate = validate(value);
    setErrors(errorsValidate);
  };
  return {
    value,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidacion;
