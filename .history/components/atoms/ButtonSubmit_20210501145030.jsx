import React from "react";
import classnames from "classnames";

export const ButtonSubmit = ({
  value,
  bgColor,
  hoverColor,
  borderColor,
  onClick,
}) => {
  return (
    <button
      className={classnames(`${bgColor} hover:${hoverColor} ${borderColor}
      hover:border-black mr-8  text-black font-bold py-2 px-4 border-b-4 rounded cursor-pointer
      font-serif
      `)}
      type="submit"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ButtonSubmit;
