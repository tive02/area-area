import React from "react";

const Seeker = () => {
  return (
    <form
      //onSubmit={buscarProducto}
      className="flex flex-row">
      <input
        type="text"
        placeholder="Buscar Articulos"
        //onChange={(e) => guardarBusqueda(e.target.value)}
      />
      <button type="submit" className="flex items-end ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-8"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </form>
  );
};

export default Seeker;
