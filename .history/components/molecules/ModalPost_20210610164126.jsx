import React from "react";

export default function ModalPost() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <button
        className="bg-purple-700 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Titulo, imagen y categorias
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Titulo, imagen y categorias
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                  <form className="grid space-x-4 grid-cols-1 lg:grid-cols-2">
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Titulo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="border-2 border-gray-300 p-2 w-full"
                        name="title"
                        id="title"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Categorias <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="border-2 border-gray-300 p-2 w-full"
                        name="tags"
                        id="tags"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Resumen <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="border-2 border-gray-300 p-2 w-full"
                        name="resume"
                        id="resume"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Imagen Principal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        className="border-2 border-gray-300 p-2 w-full"
                        name="img"
                        id="img"
                        required
                      />
                    </div>
                  </form>
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
