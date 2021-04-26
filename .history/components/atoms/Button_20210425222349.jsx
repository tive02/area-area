import React from "react";
import classnames from "classnames";
import Link from "next/link";

export const Button = ({
  value,
  bgColor,
  hoverColor,
  borderColor,
  link,
  onClick,
  type,
}) => {
  return (
    <button
      className={classnames(`${bgColor} hover:${hoverColor} ${borderColor}
      hover:border-black mr-8  text-black font-bold py-2 px-4 border-b-4 rounded cursor-pointer
      font-serif
      `)}
      onClick={onClick}
      type={type}
    >
      <Link href={`${link}`}>
        <a>{value}</a>
      </Link>
    </button>
  );
};

export default Button;
