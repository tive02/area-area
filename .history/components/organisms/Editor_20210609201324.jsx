import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DraftJS, editorStateFromRaw } from "megadraft";

import dynamic from "next/dynamic";
const MegadraftEditor = dynamic(
  () => {
    return import("megadraft").then((mod) => mod.MegadraftEditor);
  },
  { loading: () => null, ssr: false }
);

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

// this is the default LinkInput that handles `LINK`-entities:
import LinkInput from "megadraft/lib/entity_inputs/LinkInput";

const entityInputs = {
  LINK: LinkInput,
};

const actions = [
  { type: "inline", label: "B", style: "BOLD" },
  { type: "inline", label: "I", style: "ITALIC" },
  // these actions correspond with the entityInputs above
  {
    type: "entity",
    label: "Link",
    style: "link",
    entity: "LINK",
  },
  {
    type: "entity",
    label: "Page Link",
    style: "link",
    entity: "INTERNAL_PAGE_LINK",
  },

  { type: "separator" },
  {
    type: "block",
    label: "UL",
    style: "unordered-list-item",
  },
  {
    type: "block",
    label: "OL",
    style: "ordered-list-item",
  },
  { type: "block", label: "H2", style: "header-two" },
  {
    type: "block",
    label: "QT",
    style: "blockquote",
  },
];

const myDecorator = new DraftJS.CompositeDecorator();
// see section "Rendering a custom entity" below

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: editorStateFromRaw(null, myDecorator) };
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
          actions={actions}
          entityInputs={entityInputs}
        />
      </div>
    );
  }
}

export default Editor;
