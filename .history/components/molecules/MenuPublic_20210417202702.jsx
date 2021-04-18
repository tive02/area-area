import React from "react";
import Link from "next/link";

export const MenuPublic = () => {
  return (
    <nav>
      <ul className="invisible md:visible md:flex md:flex-row md:justify-around font-serif">
        <li
          className="px-4 py-2 mt-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li
          className="px-4 py-2 mt-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
          <Link href="/results">
            <a>Resultados</a>
          </Link>
        </li>
        <li
          className="px-4 py-2 mt-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
          <Link href="/about">
            <a>Nosotros</a>
          </Link>
        </li>
        <li
          className="px-4 py-2 mt-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
          <Link href="/contribution">
            <a>¿Como contribuir?</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPublic;
