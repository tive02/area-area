import React from "react";
import Seeker from "../atoms/icons/Seeker";

const Searcher = () => {
  return (
    <form
      //onSubmit={buscarProducto}
      className="flex flex-row"
    >
      <input
        type="search"
        placeholder="Buscar Articulos"
        className="placeholder-gray-900 focus:placeholder-gray-500 hover:bg-green-200 focus:bg-green-200"
        //onChange={(e) => guardarBusqueda(e.target.value)}
      />
      <button type="submit" className="flex items-center pl-1.5">
        <Seeker />
      </button>
    </form>
  );
};

export default Searcher;
