import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

export default function Prueba() {
  const { register, handleSubmit, formState: touched } = useForm();

  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    console.log("touched", formState.touched);
  }, [formState]); // use entire formState object as optional array arg in useEffect, not individual properties of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("test")} />
      <input type="submit" />
    </form>
  );
}
