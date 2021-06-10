import React, { useEffect, useState, Fragment } from "react";
import ReactDOM from "react-dom";
import { editorStateFromRaw, editorStateToJSON } from "megadraft";

import dynamic from "next/dynamic";
const MegadraftEditor = dynamic(
  () => {
    return import("megadraft").then((mod) => mod.MegadraftEditor);
  },
  { loading: () => null, ssr: false }
);

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";
//Componentes propios
import Header from "../components/organisms/Header";

import ButtonSubmit from "../components/atoms/ButtonSubmit";

export default class NewPublication extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null) };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };
  onSaveClick = () => {
    const { editorState } = this.state;
    const content = editorStateToJSON(editorState);
    // Your function to save the content
    // save_my_content(content);
    console.log(content);
  };
  render() {
  
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
                  ></input>
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
                  ></input>
                </div>
                <div className="container mx-auto px-4">
                  {/* {/*<!-- main post -->*/}
                  <div style={{ marginLeft: 80 }}>
                    <MegadraftEditor
                      editorState={this.state.editorState}
                      onChange={this.onChange}
                      placeholder="Agrega tu texto en este espacio."
                    />
              </div>
                </div>
                <div className="max-w-7xl mx-auto bg-red-500">
                  <ButtonSubmit
                    bgColor="bg-purple-700"
                    borderColor="border-gray-700"
                    value="Publicar"
                    onClick={this.onSaveClick}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
