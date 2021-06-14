import React, { Fragment, useContext } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
//validaciones
import validateCreatePost from "../../validation/validateCreatePost";
const useValidation = dynamic(
  () => {
    import("../../hooks/useValidation");
  },
  { loading: () => null, ssr: false }
);

//Firebase
import { FirebaseContext } from "../../firebase";

const STATE_INITIAL = {
  title: "",
  tags: "",
  imagen: "",
  url: "",
  resume: "",
};

export default function ModalPost() {
  const [width, setWidth] = useState(0);
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useValidation(STATE_INITIAL, validateCreatePost, CreatePost);

  if (useValidation) {
    const { title, tags, img, url, resume } = values;
  }
  //Hook de routing para redireccionar
  const router = useRouter();
  //Context de las operaciones CRUD de Firebase
  const { usuario, firebase } = useContext(FirebaseContext);

  //Funcion para rear los Post
  async function CreatePost() {
    //Si el usuario no esta autenticado llevar al login
    if (!usuario) {
      return router.push("/");
    }

    //Crear el objeto de nuevo producto
    const post = {
      title,
      tags,
      url,
      img,
      resume,
      votos: 0,
      comentarios: [],
      creado: Date.now(),
    };

    //Insertarlo en la base de datos
    firebase.db.collection("posts").add(post);
    //Redireccionar al inicio
    return router.push("/");
  }

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
                    onSubmit={handleSubmit}
                    noValidate
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
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
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
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
                        value={url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                      />
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
                    </div>
                  </form>
                </div>
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
