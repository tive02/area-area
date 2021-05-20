import React from "react";
const InfoProject = ({ title, description }) => {
  return (
    <div className="mt-8 md:mt-0 md:w-1/2">
      <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      <p className="max-w-md mt-4 text-gray-600">{description}</p>
    </div>
  );
};

export default InfoProject;
