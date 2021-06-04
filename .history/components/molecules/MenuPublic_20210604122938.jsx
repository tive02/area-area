import React, { useContext } from "react";

import { FirebaseContext } from "../../firebase";
import Link from "next/link";

export const MenuPublic = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <nav>
      <ul className="hidden  md:flex md:flex-row md:justify-around font-serif">
        <li
          className="px-2 py-2  text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        >
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        {user ? (
          <li
            className=" px-2 py-2 text-sm tracking-tight font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          >
            <Link href="/new-publication">
              <a>Nueva Publicación</a>
            </Link>
          </li>
        ) : (
          <li
            className="px-2 py-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
          >
            <Link href="/about">
              <a>Nosotros</a>
            </Link>
          </li>
        )}
        <li
          className="px-2 py-2 text-sm font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
        >
          <Link href="/contribution">
            <a>¿Como contribuir?</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuPublic;
