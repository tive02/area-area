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
      <Button type="submit"> Buscar</Button>
    </form>
  );
};

export default Seeker;
