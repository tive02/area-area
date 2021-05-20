import React from "react";
const InfoProject = ({ title, description }) => {
  return (
    <div className="mt-8 md:mt-0 md:w-1/2">
      <h3 className="text-2xl font-semibold text-gray-800">Nuestra Misión</h3>
      <p className="max-w-md mt-4 text-gray-600">
        “Promover el empoderamiento y la participación de la mujer en la
        práctica del fútbol; resaltando su valiosa labor y reconociendo el
        avance histórico que ha tenido dentro de este deporte, esto, a través de
        la generación de contenido futbolístico en la web, que permita
        fortalecer los espacios de reflexión y participación deportiva".
      </p>
    </div>
  );
};

export default InfoProject;
