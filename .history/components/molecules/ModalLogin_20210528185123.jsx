import React from "react";
import ButtonSubmit from "../atoms/ButtonSubmit";
import SignInScreen from "../atoms/SignInScreen";

export default function ModalLogin() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <ButtonSubmit
        bgColor="bg-green-400"
        borderColor="border-gray-700"
        value="Inicia Sesión"
        onClick={() => setShowModal(true)}
      />

      {showModal ? (
        <>
          <div className="lg:justify-center lg:items-center lg:flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-screen lg:w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Inicia Sesión</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <SignInScreen />
                  </div>
                </div>
                {/*footer*/}
                <div
                  className="flex items-center justify-end p-6 border-t 
                w-full border-solid border-blueGray-200 rounded-b"
                >
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
