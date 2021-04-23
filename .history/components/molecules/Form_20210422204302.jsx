import React from 'react'

const Form = () => {
  return (  <h1
    >
    Iniciar Sesión
  </h1>
  <form onSubmit={handleSubmit} noValidate>
    <div>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Tu Email"
        name="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    {errores.email && <Error>{errores.email}</Error>}
    <div>
      <label htmlFor="password">Contraseña</label>
      <input
        type="password"
        id="password"
        placeholder="Tu Password"
        name="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    {errores.password && <Error>{errores.password}</Error>}
    {error && <Error>{error}</Error>}
    <Input type="submit" value="Iniciar Sesión" />
  </form> );
}
 
export default Form;
