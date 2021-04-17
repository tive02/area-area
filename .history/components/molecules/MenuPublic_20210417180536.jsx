import React from "react";
import Link from "next/link";

export const MenuPublic = () => {
  return (
    <nav>
      <ul className="invisible bg-blue-500 md:visible md:flex md:flex-row md:w-4/6 ">
        <li>
          <Link
            className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            href="/tags/Tags">
            Temas
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            href="/about/About">
            Nuestro Equipo
          </Link>
        </li>
        <li>
          <Link
            className="px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
            href="/contribution/Contribution">
            ¿Como contribuir?
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPublic;
