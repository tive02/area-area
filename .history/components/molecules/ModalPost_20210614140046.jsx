import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";
//Firebase
import { FirebaseContext } from "../../firebase";

//Hook de routing
const router = useRouter();
//Context de las operaciones CRUD de Firebase
const { usuario, firebase } = useContext(FirebaseContext);

export default async function ModalPost() {
  //Si el usuario no esta autenticado llevar al login
  if (!usuario) {
    return router.push("/");
  }

  //Crear el objeto de nuevo producto
  const post = {
    title,
    urlimg,
    resume,
    tags,
    votos: 0,
    comentarios: [],
    creado: Date.now(),
    
  };

   //Insertarlo en la base de datos
   firebase.db.collection("posts").add(post);
   //Redireccionar al inicio
   return router.push("/");
 
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  
  const [showModal, setShowModal] = React.useState(true);

  const onSubmit = (data) => console.log(data);

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
                  <form
                    className="grid space-x-2 grid-cols-1 lg:grid-cols-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Titulo <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        type="textarea"
                        className="resize-y border-2 border-gray-300  w-full"
                        name="title"
                        id="title"
                        value={title}
                        required
                        {...register("title", {
                          required: true,
                        })}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Categorias <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        type="textarea"
                        className="resize-y border-2 border-gray-300  w-full"
                        name="tags"
                        id="tags"
                        value={tags}
                        required
                        {...register("tags", {
                          required: true,
                        })}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Resumen <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        type="textarea"
                        className="resize-y border-2 border-gray-300  w-full"
                        name="resume"
                        id="resume"
                        value={resume}
                        required
                        {...register("resume", {
                          required: true,
                        })}
                      ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="text-xl text-gray-600">
                        Imagen Principal <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        className="border-2 border-gray-300 w-full"
                        name="img"
                        id="img"
                        value={urlimg}
                        required
                        {...register("img", {
                          required: true,
                        })}
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <input
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    value="Crear post"
                        
                  >
                    submit
                  </input>
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
          </div>
        </>
      ) : null}
    </>
  }
}
