import React from "react";

const Seeker = () => {
  return (
    <form
    //onSubmit={buscarProducto}
    >
      <input
        type="text"
        placeholder="Buscar Productos"
        //onChange={(e) => guardarBusqueda(e.target.value)}
      />
      <input type="submit"> Buscar</input>
    </form>
  );
};

export default Seeker;
