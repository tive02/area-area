import Image from "next/image";
import React from "react";
const InfoProject = ({ title, description, img, altImg }) => {
  return (
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="items-center md:flex md:space-x-6">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="max-w-md">
              <Image src={img} alt={altImg} width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="max-w-md mt-4 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoProject;
