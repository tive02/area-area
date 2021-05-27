import React from "react";
const Testimonials = ({ title, description }) => {
  return (
    <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md">
      <h6 className="text-xl font-medium text-gray-800">{title}</h6>
      <p className="max-w-md mt-4 text-gray-400">{description}</p>
    </div>
  );
};

export default Testimonials;
