import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { editorStateFromRaw } from "megadraft";

import dynamic from "next/dynamic";
const MegadraftEditor = dynamic(
  () => {
    return import("megadraft").then((mod) => mod.MegadraftEditor);
  },
  { loading: () => null, ssr: false }
);

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
          language="es-ES"
          i18n={
            ({
              "Type the link and press enter": "Escriba el enlace y presione enter",
            },
            { "Invalid Link": "Vínculo no válido" },
            {
              "Can't show plugin, component {{type}} not found.":
                `No se puede mostrar el complemento, el componente {${type}} no se encuentra`,
            },
            { "Block List": "Lista de bloqueo"" })
          }
          hideSidebarOnBlur={true}
        />
      </div>
    );
  }
}

export default Editor;
