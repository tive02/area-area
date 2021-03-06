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
                <>
                  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                      <div class="p-6 bg-white border-b border-gray-200">
                        <form method="POST" action="action.php">
                          <div class="mb-4">
                            <label class="text-xl text-gray-600">
                              Title <span class="text-red-500">*</span>
                            </label>
                          
                          <input
                            type="text"
                            class="border-2 border-gray-300 p-2 w-full"
                            name="title"
                            id="title"
                            value=""
                            required
                          /></div>

                          <div class="mb-4">
                            <label class="text-xl text-gray-600">
                              Description
                            </label>
                          
                          <input
                            type="text"
                            class="border-2 border-gray-300 p-2 w-full"
                            name="description"
                            id="description"
                            placeholder="(Optional)"
                          />

                          </div>

                          <div class="mb-8">
                            <label class="text-xl text-gray-600">
                              Content <span class="text-red-500">*</span>
                            </label>
                          
                          <textarea
                            name="content"
                            class="border-2 border-gray-500"
                          ></textarea>
                        </div>

                        <div class="flex p-1">
                          <select
                            class="border-2 border-gray-300 border-r p-2"
                            name="action"
                          >
                            <option>Save and Publish</option>
                            <option>Save Draft</option>
                          </select>
                          <button
                            role="submit"
                            class="p-3 bg-blue-500 text-white hover:bg-blue-400"
                            required
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              
              <>
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
