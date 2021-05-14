import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null) };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
  };

  render() {
    return (
      //Add some margin left to show plugins sidebar
      <div style={{ marginLeft: 80 }}>
        <MegadraftEditor
          editorState={this.state.editorState}
          onChange={this.onChange}
          placeholder="Agrega tu texto en este espacio."
          i18n = {
            "Type the link and press enter": "Escriba el enlace y presione enter ",
            "Invalid Link": "Link Invalido",
            "Can't show plugin, component {{type}} not found.":
              "No se puede mostrar el {{type}}, o no se encuentra el {{type}}.",
            "Block List": "Lista de Bloqueos"
          }
        />
      </div>
    );
  }
}

if (typeof window === "object") {
  <Editor />;
}

export default Editor;
