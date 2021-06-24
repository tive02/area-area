import React, { useEffect, useState, useContext } from "react";
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

import Header from "../components/organisms/Header";
import ButtonSubmit from "../components/atoms/ButtonSubmit";
import ModalPost from "../components/molecules/ModalPost";
//Firebase
import firebase from "../firebase";

const newPublication = () => {
  //State del contenido
  const [content, setContent] = useState({});
  //objeto para que el contenido
  const myContent = {
    entityMap: {},
    blocks: [{}],
  };
  //State del editor
  const [editorState, setEditorState] = useState(editorStateFromRaw(myContent));

  const onSaveClick = async () => {
    const content = editorStateToJSON(editorState);
    //cambio de estado para pasar al props content
    setContent(content);
    console.log(content);
  };

  return (
    //Add some margin left to show plugins sidebar
    <>
      <Header />
      <div className="py-16">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div style={{ marginLeft: 80 }}>
            <MegadraftEditor
              editorState={editorState}
              onChange={setEditorState}
              placeholder="Agrega tu Articulo en este espacio."
            />
          </div>
          <div>
            <ModalPost content={content} onFocus={onSaveClick} />
          </div>
        </div>
      </div>
    </>
  );
};

export default newPublication;
