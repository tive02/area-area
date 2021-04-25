import React, { useEffect, useState } from "react";

const useValidacionUser = (initialState, validate, fn) => {
  const [values, setValue] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const notErrors = Object.keys(errors).length === 0;
      if (notErrors) {
        fn(); // fn = funtion with ejecute in the componenet
      }
      setSubmitForm(false);
    }
  }, [errors]);
  //Funtion with ejecute conform the user writing in the interface
  const handleChange = (e) => {
    setValue({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //Funtion with ejecute conform the user realize submit the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsValidate = validate(values);
    setErrors(errorsValidate);
    setSubmitForm(true);
  };

  //Funcion que se ejecuta cuando se realiza el evento blur
  const handleBlur = () => {
    const errorsValidate = validate(values);
    setErrors(errorsValidate);
  };
  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useValidationUser;
