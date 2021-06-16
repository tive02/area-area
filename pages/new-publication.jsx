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

  //State del editor
  const [editorState, setEditorState] = useState(editorStateFromRaw(null));

  const onSaveClick = async () => {
    const content = editorStateToJSON(editorState);
    // Your function to save the content
    // save_my_content(content);
    //Insertarlo en la base de datos
    //firebase.db.collection("posts").doc("la").add(content);
    setContent(content);
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
            <ModalPost content={content} />
          </div>
          <div>
            <ButtonSubmit
              value="Publicar"
              bgColor="bg-purple-700"
              hoverColor="bg-green-400"
              onClick={onSaveClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default newPublication;
