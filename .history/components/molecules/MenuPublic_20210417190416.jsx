import React from "react";
import Link from "next/link";
import styled from "styled-components";

const LI = styled.li`
px-4 py-2 mt-2 text-lg font-semibold text-black-400 
          md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline"
`;

export const MenuPublic = () => {
  return (
    <nav>
      <ul className="invisible md:visible md:flex md:flex-row md:justify-around">
        <li>
          <Link className="" href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="" href="/tags/Tags">
            Temas
          </Link>
        </li>
        <li>
          <Link href="/about/About">Nuestro Equipo</Link>
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
