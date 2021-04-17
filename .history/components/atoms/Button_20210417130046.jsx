import React from "react";
import classnames from "classnames";

export const Button = ({ label, bgColor, hoverColor, borderColor }) => {
  return (
    <button
      className={classnames(`bg-${bgColor} hover:bg-${hoverColor} border-${borderColor}
      hover:border-black m-2 text-black font-bold py-2 px-2 border-b-4 rounded `)}>
      <label for="">{label}</label>
    </button>
  );
};

export default Button;
