import React, { useState } from "react";
import MenuMobile from "../molecules/MenuMobile";

export default function ButtonHamburguer() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };
  const closeToggleNav = () => {
    setIsNavVisible(true);
  };

  return (
    <>
      <button onClick={closeToggleNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 fixed"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      {isNavVisible ? null}
      <button
        onClick={toggleNav}
        className=" w-full flex items-end rounded-md  md:hidden"
      >
        <svg fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 
        01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 
        110 2h-6a1 1 0 01-1-1z"
          ></path>
        </svg>
      </button>
      {!isNavVisible && <MenuMobile />}
    </>
  );
}
