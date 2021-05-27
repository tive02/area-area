import React from "react";
import classnames from "classnames";

export const ButtonSubmit = ({
  value,
  //Props del CSS
  bgColor,
  hoverColor,
  borderColor,

  //Props de los eventos
  onClick,
}) => {
  return (
    <button
      className={classnames(`${bgColor} hover:${hoverColor} ${borderColor}
      hover:border-black mr-8  text-black font-bold py-2 px-4 border-b-4 rounded cursor-pointer
      font-serif w-full
      float-right leading-none outline-none focus:outline-none"
      `)}
      type="submit"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ButtonSubmit;
