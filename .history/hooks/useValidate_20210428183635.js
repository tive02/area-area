import React, { useEffect, useState } from "react";

const useValidate = (initialState, validate, fn) => {
  const [values, setValues] = useState(initialState);
  const [errorsValidate, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const notErrors = Object.keys(errorsValidate).length === 0;
      if (notErrors) {
        fn(); // fn = función que se ejecuta en el componente
      }
      setSubmitForm(false);
    }
  }, [errorsValidate]);
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
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
    setSubmitForm(true);
  };

  //Funcion que se ejecuta cuando se realiza el evento blur
  const handleBlur = () => {
    const errorsValidation = validate(values);
    setErrors(errorsValidation);
  };
  return {
    values,
    errorsValidate,
    submitForm,
    handleChange,
    manipulateSubmit,
    handleBlur,
  };
};

export default useValidate;
