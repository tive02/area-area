import React, { useState } from "react";
import classnames from "classnames";
import MenuMobile from "../molecules/MenuMobile";

export default function ButtonHamburguer() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className={classnames(
          `w-full flex items-end rounded-md md:hidden ${hidden}`
        )}
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
      {!isNavVisible ? <MenuMobile /> : "hidden"}
    </>
  );
}
