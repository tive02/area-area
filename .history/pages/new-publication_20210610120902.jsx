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
import { Fragment } from "react";
import Header from "../components/organisms/Header";
import ButtonSubmit from "../components/atoms/ButtonSubmit";

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
    return (
      //Add some margin left to show plugins sidebar
      <>
        <Header />
        <div class="py-12">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <form method="POST">
              <div style={{ marginLeft: 80 }}>
                <MegadraftEditor
                  editorState={this.state.editorState}
                  onChange={this.onChange}
                  placeholder="Agrega tu Articulo en este espacio."
                />
              </div>
              <div>
                <ButtonSubmit
                  value="Publicar"
                  bgColor="bg-purple-700"
                  hoverColor="bg-green-400"
                  onClick={this.onSaveClick}
                />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default newPublication;
