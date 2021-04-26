import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

function App() {
  const { register, errors, handleSubmit } = useForm({
    mode: "onBlur", // "onChange"
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder="bill"
            {...register("firstName", { required: true, maxLength: 2 })}
          />
          {errors.firstName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder="luo"
            {...register("lastName", { required: true })}
          />
          {errors.lastName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email
          </label>
          <input {...register("email", { required: true })} />
          {errors.email && <p>This is required</p>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
