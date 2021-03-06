import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { FirebaseContext } from "../../firebase";
import ModalLogin from "./ModalLogin";

const MenuMobile = () => {
  //Estado para manejar cerrar el menu en mobile
  const [closeNavVisible, setCloseNavVisible] = useState(false);

  const closeToggleNav = () => {
    setCloseNavVisible(true);
  };

  //context para el cambio en la navegación si el usuario se encuentra loggeado
  const { user, firebase } = useContext(FirebaseContext);

  return (
    <>
      <div
        className={classNames(`
      ${closeNavVisible && "hidden"}
      fixed z-10 min-h-screen flex flex-col flex-auto flex-shrink-0 right-0 w-48`)}
      >
        <div
          className="bg-purple-700 fixed inset-y-0 flex flex-col w-64 h-full border-r 
        transition duration-1000 ease-in-out"
        >
          <div className="overflow-y-auto overflow-x-hidden flex-grow inline">
            <div className="flex flex-row justify-around h-8 pt-4 pr-4 ">
              <div className="text-xl font-light tracking-wide text-gray-700">
                Menu
              </div>
              <button className=" w-1/4" onClick={closeToggleNav}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <nav className="pt-4">
              <ul className="flex flex-col py-4 space-y-1">
                <li>
                  <Link href="/">
                    <a
                      className="relative flex flex-row items-center h-11 focus:outline-none 
                  hover:bg-green-500 text-gray-800 hover:text-gray-800  hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Inicio
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/new-publication">
                    <a
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Nueva Publicación
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <a
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Nosotros
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contribution">
                    <a
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  hover:border-indigo-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                          />
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        ¿Como Contribuir?
                      </span>
                    </a>
                  </Link>
                </li>
                {user ? (
                  <>
                    <li>
                      <p
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  hover:border-indigo-500 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Ajustes.
                        </span>
                      </p>
                    </li>
                    <li>
                      <button
                        onClick={() => firebase.outLogin()}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  hover:border-indigo-500 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            />
                          </svg>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Cerrar sesión.
                        </span>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <div
                        className="relative flex justify-center items-center h-11 focus:outline-none
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  pr-6"
                      >
                        <ModalLogin />
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
