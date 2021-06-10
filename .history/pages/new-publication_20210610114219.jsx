import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

import Editor from "../components/organisms/Editor";
import Header from "../components/organisms/Header";
import ButtonSubmit from "../components/atoms/ButtonSubmit";

const newPublication = () => {
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "all",
  });
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-2 bg-white border-b border-gray-200">
            <form method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-xl text-gray-600">
                  Titulo <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-text border-2 border-gray-300 w-full"
                  id="title"
                  required
                  {...register("title", {
                    required: true,
                  })}
                />
                {errors.title && <p>{errors.title.message}</p>}
              </div>
              <div className="mb-2">
                <label className="text-xl text-gray-600">
                  Resumen <span className="text-red-500">*</span>
                </label>
                <input
                  type="textarea"
                  className="form-textarea border-2 border-gray-300 w-full h-32"
                  name="description"
                  id="description"
                  required
                  placeholder="Resumen"
                  {...register("description", {
                    required: true,
                  })}
                />
                {errors.description && <p>{errors.description.message}</p>}
              </div>
              <div className="mb-4">
                <label className="text-xl text-gray-600">
                  Imagen principal <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  randomizeFilename
                  className=" border-2 border-gray-300 p-2 w-full"
                  name="img"
                  id="img"
                  required
                  placeholder="Link de la imagen"
                  {...register("img", {
                    required: true,
                  })}
                />
                {errors.img && <p>{errors.img.message}</p>}
              </div>
              <div className=" mx-auto relative ">
                {/* {/*<!-- main post -->*/}
                <Editor />
              </div>
              <div className="max-w-7xl mx-auto bg-red-500">
                <ButtonSubmit
                  bgColor="bg-purple-700"
                  borderColor="border-gray-700"
                  value="Publicar"
                  onClick={() => {
                    [
                      {
                        type: "manual",
                        name: "title",
                        message: "El titulo es obligatorio",
                      },
                      {
                        type: "manual",
                        name: "description",
                        message: "El Resumen es obligatorio",
                      },
                      {
                        type: "manual",
                        name: "img",
                        message: "La Imagen es obligatoria.",
                      },
                    ].forEach(({ name, type, message }) =>
                      setError(name, { type, message })
                    );
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default newPublication;
