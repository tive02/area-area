import React, { Fragment } from "react";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import Editor from "../components/organisms/Editor";
import Header from "../components/organisms/Header";
import Button from "../components/atoms/Button";
import ButtonSubmit from "../components/atoms/ButtonSubmit";

const newPublication = () => {
  return (
    <>
      <Header />
      <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 bg-white border-b border-gray-200">
              <form method="POST">
                <div class="mb-4">
                  <label class="text-xl text-gray-600">
                    Titulo <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    class="border-2 border-gray-300 p-2 w-full"
                    name="title"
                    id="title"
                    value=""
                    required
                    {...register("title", {
                      required: true,
                    })}
                  />
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
