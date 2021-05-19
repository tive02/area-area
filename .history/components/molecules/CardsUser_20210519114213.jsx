import React from "react";

const Cards = ({ img, altImg, title, paragraph }) => {
  return (
    <div
      className="
    w-1/4
    relative flex flex-col min-w-min break-words 
    lg:w-full mb-6 shadow-lg rounded-lg bg-green-400"
    >
      <img
        alt={altImg}
        src={img}
        className="w-full align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block"
          style={{
            height: "95px",
            top: "-94px",
          }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-green-400 fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="text-md font-light mt-2 text-white">{paragraph}</p>
      </blockquote>
    </div>
  );
};

export default Cards;
