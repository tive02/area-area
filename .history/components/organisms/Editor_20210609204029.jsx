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
          i18n={
            ({
              "Type the link and press enter": "Type the link and press enter",
            },
            { "Invalid Link": "Invalid Link" },
            {
              "Can't show plugin, component {{type}} not found.":
                "Can't show plugin, component {{type}} not found.",
            },
            { "Block List": "Block List" })
          }
        />
      </div>
    );
  }
}

export default Editor;
