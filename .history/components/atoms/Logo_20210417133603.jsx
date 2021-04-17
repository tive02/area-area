import React from "react";
import Link from "next/link";
import iconLogo from "./icons/iconLogo";

const Logo = () => {
  return (
    <Link href="/" className="flex md:grid md:grid-cols-1 gap-0 text-white ">
      <div className="md:flex md:justify-center">
        <iconLogo />
      </div>
      <span className="flex self-center pl-4 p-0 text-center text-xl lg:hidden lg:text-xl tracking-tight">
        De Área a Área
      </span>
    </Link>
  );
};

export default Logo;
