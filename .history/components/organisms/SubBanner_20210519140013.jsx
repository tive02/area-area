import React from "react";
import classnames from "classnames";
import Image from "next/image";

const SubBanner = ({
  leftCardTitle,
  leftCardParagraph,
  centerCardTitle,
  centerCardParagraph,
  rightCardTitle,
  rightCardParagraph,
  titleDescription,
  paragraphDescription,
  img,
  altImg,
  titleCard,
  paragraphCard,
}) => (
  <section className="pb-20 bg-gray-300 -mt-24 z-30">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-700">
                <i className="fas fa-award"></i>
              </div>
              <h6 className="text-xl font-semibold">{leftCardTitle}</h6>
              <p className="mt-2 mb-4 text-gray-600">{leftCardParagraph}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-700">
                <i className="fas fa-retweet"></i>
              </div>
              <h6 className="text-xl font-semibold">{centerCardTitle}</h6>
              <p className="mt-2 mb-4 text-gray-600">{centerCardParagraph}</p>
            </div>
          </div>
        </div>

        <div className="pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                <i className="fas fa-fingerprint"></i>
              </div>
              <h6 className="text-xl font-semibold">{rightCardTitle}</h6>
              <p className="mt-2 mb-4 text-gray-600">{rightCardParagraph}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center mt-32">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-purple-700">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            {titleDescription}
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            {paragraphDescription}
          </p>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-purple-700">
            <div>
              <Image alt={altImg} src={img} layout="fill" quality={100} />
            </div>
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
                  className="text-purple-700 fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">{titleCard}</h4>
              <p className="text-md font-light mt-2 text-white">
                {paragraphCard}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SubBanner;
