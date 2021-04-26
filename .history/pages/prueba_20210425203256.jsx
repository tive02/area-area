import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

export default function Prueba() {
  const { register, errors, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name</label>
      <input type="text" {...register("FirstName", { minLength: 2 })} />
      <label>Last name</label>
      <input
        type="text"
        {...register("Last name", { required: true, maxLength: 5 })}
      />
      <label>Email</label>
      <input
        type="text"
        {...register("Email", {
          required: true,
          pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <label>Mobile number</label>
      <input
        type="tel"
        {...register("Mobile number", {
          required: true,
          maxLength: 11,
          minLength: 8,
        })}
      />
      <label>Are you a developer?</label>
      <input
        type="radio"
        value="Yes"
        {...register("developer", { required: true })}
      />
      <input
        type="radio"
        value="No"
        {...register("developer", { required: true })}
      />

      <input type="submit" />
    </form>
  );
}
