import React from "react";
import Link from "next/link";
import iconLogo from "./icons/iconLogo";

const Logo = () => {
  return (
    <Link href="/" className="flex md:grid md:grid-cols-1 gap-0 text-white ">
      <a>
        <iconLogo />
      </a>
    </Link>
  );
};

export default Logo;
