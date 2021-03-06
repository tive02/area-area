import React, { useEffect, useState } from "react";
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
import { FirebaseContext } from "../firebase";

class newPublication extends React.Component {
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
    //Context de las operaciones CRUD de Firebase
    const { usuario, firebase } = useContext(FirebaseContext);
    if (!usuario) {
      return router.push("/");
    }
    return (
      //Add some margin left to show plugins sidebar
      <>
        <Header />
        <div className="py-16">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div style={{ marginLeft: 80 }}>
              <MegadraftEditor
                editorState={this.state.editorState}
                onChange={this.onChange}
                placeholder="Agrega tu Articulo en este espacio."
              />
            </div>
            <div>
              <ModalPost />
            </div>
            <div>
              <ButtonSubmit
                value="Publicar"
                bgColor="bg-purple-700"
                hoverColor="bg-green-400"
                onClick={this.onSaveClick}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default newPublication;
