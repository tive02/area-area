import React, { Fragment } from "react";
import Link from "next/link";
import Button from "../atoms/Button";

const MenuMobile = () => {
  return (
    <>
      <div
        class="z-10 min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased
       text-gray-800 bg-purple-700  right-0 p-4 
       ">
        <div class="fixed inset-y-0 flex flex-col w-64 bg-white h-full border-r transition duration-1000 ease-in-out">
          <div class="overflow-y-auto overflow-x-hidden flex-grow">
            <ul class="flex flex-col py-4 space-y-1">
              <li class="px-5">
                <div class="flex flex-row items-center h-8">
                  <div class="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
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
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Inicio
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
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
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Resultados
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </span>
                  <span class="ml-2 text-sm tracking-wide truncate">
                    Nosotros
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6">
                  <span class="inline-flex justify-center items-center ml-4">
                    <svg
                      class="w-5 h-5"
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
                  <span class="ml-2 text-sm tracking-wide truncate">
                    ¿Como Contribuir?
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <nav className="bg-purple-700 fixed inset-y-0 right-0 p-4 
    transition duration-1000 ease-in-out">
      <div className="mt-16 ml-8">
        <Button
          bgColor="green-400"
          hoverColor="green-400"
          borderColor="green-400"
          label="Ingresa" />
        <Button
          bgColor="green-400"
          hoverColor="green-400"
          borderColor="green-400"
          label="Suscribete" />
      </div>
      <ul className="m-8 ">
        <Link className="text-2xl font-semibold text-black"
          href="/">
          <li className="mt-6
        hover:text-gray-900 focus:text-gray-900 hover:bg-green-400 
        focus:bg-green-400 focus:outline-none focus:shadow">
            Inicio </li></Link>
        <Link className="text-2xl font-semibold text-black"
          href="/Tags">
          <li className=" mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Temas</li></Link>
        <Link className="text-2xl font-semibold text-black"
          href="/Team"><li className="mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            Team</li></Link>
        <Link className="text-2xl font-semibold text-black"
          href="/Contribution"><li className="mt-2
        hover:text-gray-900 focus:text-gray-900 
          hover:bg-green-400 focus:bg-green-400 
          focus:outline-none focus:shadow-outline">
            ¿Como contribuir?</li></Link>
      </ul>
    </nav > */}
    </>
  );
};

export default MenuMobile;
