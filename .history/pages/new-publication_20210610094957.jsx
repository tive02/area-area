import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

import Editor from "../components/organisms/Editor";
import Header from "../components/organisms/Header";
import ButtonSubmit from "../components/atoms/ButtonSubmit";

const newPublication = () => {
  const { register, handleSubmit, formState, setError } = useForm({
    mode: "onBlur",
  });
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Header />
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
              <form method="POST" onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-4">
                  <label class="text-xl text-gray-600">
                    Titulo <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    class="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    required
                    {...register("title", {
                      required: true,
                    })}
                  />
                  {errors.title && <p>{errors.title.message}</p>}
                </div>
                <div class="mb-4">
                  <label class="text-xl text-gray-600">Resumen</label>
                  <input
                    type="text"
                    class="border-2 border-gray-300 p-2 w-full"
                    name="description"
                    id="description"
                    required
                    placeholder="(Optional)"
                    {...register("description", {
                      required: true,
                    })}
                  />
                  {errors.description && <p>{errors.description.message}</p>}
                </div>
                <div class="mb-4">
                  <label class="text-xl text-gray-600">Imagen principal</label>
                  <input
                    type="file"
                    accept="image/*"
                    class="border-2 border-gray-300 p-2 w-full"
                    name="img"
                    id="img"
                    required
                    {...register("img", {
                      pattern: {
                        value: /.(gif|jpeg|jpg|png)$/,
                        message: "error message", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                  />
                  {errors.img && <p>{errors.img.message}</p>}
                </div>
                <div className="container mx-auto px-4">
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
                          message:
                            "No es una imagen, prueba con archivos jpg or jpeg or png or gif",
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
      </div>
    </>
  );
};

export default newPublication;
