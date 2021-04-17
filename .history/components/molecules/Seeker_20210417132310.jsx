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
      <button type="submit"> Buscar</button>
    </form>
  );
};

export default Seeker;
