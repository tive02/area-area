import React from "react";
import Link from "next/link";
import iconLogo from "./icons/iconLogo";

const Logo = () => {
  return (
    <Link href="/" className="flex md:grid md:grid-cols-1 gap-0 text-white ">
      <a>
        <iconLogo />
        <span className="flex self-center pl-4 p-0 text-center text-xl lg:hidden lg:text-xl tracking-tight">
          De Área a Área
        </span>
      </a>
    </Link>
  );
};

export default Logo;
