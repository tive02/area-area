import React, { Fragment } from "react";
import Link from "next/link";
import Button from "../atoms/Button";
import Logo from "../atoms/Logo";

const MenuMobile = () => {
  return (
    <>
      <div
        className="z-10 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased
        right-0 p-4 
       ">
        <div
          className="bg-purple-700 fixed inset-y-0 flex flex-col w-64 h-full border-r 
        transition duration-1000 ease-in-out">
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-700">
                    <Logo />
                  </div>
                </div>
              </li>
              <li>
                <Link href="/">
                  <a
                    className="relative flex flex-row items-center h-11 focus:outline-none 
                  hover:bg-green-500 text-gray-800 hover:text-gray-800  hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Inicio
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/results">
                  <a
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Resultados
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
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
                  hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      ¿Como Contribuir?
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contribution">
                  <a
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Login
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contribution">
                  <a
                    className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-500
                  text-gray-800 hover:text-gray-800 border-l-4 border-transparent 
                  hover:border-indigo-500 pr-6">
                    <span className="inline-flex justify-center items-center ml-4">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                      </svg>
                    </span>
                    <span className="ml-2 text-sm tracking-wide truncate">
                      Login
                    </span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
