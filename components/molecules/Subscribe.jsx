import React from "react";

const Subscribe = () => {
  return (
    <div className="p-1 mt-4 mb-4">
      <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
        Suscribete
      </h5>
      <p className="text-gray-600">
        Suscríbete a nuestro boletín. Entregamos los mejores artículos
        relacionados con rl fútbol femenino en tu bandeja de entrada.
      </p>
      <input
        placeholder="Tu dirección de email"
        className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
      />
      <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
        Suscribete
      </button>
    </div>
  );
};

export default Subscribe;
