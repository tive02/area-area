import React from "react";
import SignInScreen from "../atoms/SignInScreen";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Inicia Sesión
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                {/*body*/}
                <div className="font-sans">
                  <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                      <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
                      <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                      <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label
                          htmlFor=""
                          className="block mt-3 text-sm text-gray-700 text-center font-semibold"
                        >
                          Login
                        </label>
                        <form method="#" action="#" className="">
                          <div>
                            <input
                              type="email"
                              placeholder="Correo electronico"
                              className=" block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                          </div>

                          <div className="mt-4">
                            <input
                              type="password"
                              placeholder="Contraseña"
                              className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                            />
                          </div>

                          <div className="mt-7 flex">
                            <label
                              htmlFor="remember_me"
                              className="inline-flex items-center w-full cursor-pointer"
                            >
                              <input
                                id="remember_me"
                                type="checkbox"
                                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                name="remember"
                              />
                              <span className="ml-2 text-sm text-gray-600">
                                Recuerdame
                              </span>
                            </label>

                            <div className="w-full text-right">
                              <a
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                                href="#"
                              >
                                ¿Olvidó su contraseña?
                              </a>
                            </div>
                          </div>

                          <div className="mt-7">
                            <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                              Login
                            </button>
                          </div>

                          <div className="flex mt-7 items-center text-center">
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                            <label className="block font-medium text-sm text-gray-600 w-full">
                              Accede con
                            </label>
                            <hr className="border-gray-300 border-1 w-full rounded-md" />
                          </div>

                          <div className="flex mt-7 justify-center w-full">
                            <SignInScreen />
                          </div>

                          <div className="mt-7">
                            <div className="flex justify-center items-center">
                              <label className="mr-2">¿Eres nuevo?</label>
                              <a
                                href="#"
                                className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                              >
                                Crea una cuenta
                              </a>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
