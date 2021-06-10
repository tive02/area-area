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

// you can create a custom entity input component (see below)
import PageLinkInput from "./path/to/PageLinkInput";

const entityInputs = {
  LINK: LinkInput,
  INTERNAL_PAGE_LINK: PageLinkInput,
};

const actions = [
  { type: "inline", label: "B", style: "BOLD", icon: icons.BoldIcon },
  { type: "inline", label: "I", style: "ITALIC", icon: icons.ItalicIcon },
  // these actions correspond with the entityInputs above
  {
    type: "entity",
    label: "Link",
    style: "link",
    entity: "LINK",
    icon: icons.LinkIcon,
  },
  {
    type: "entity",
    label: "Page Link",
    style: "link",
    entity: "INTERNAL_PAGE_LINK",
    icon: MyPageLinkIcon,
  },

  { type: "separator" },
  {
    type: "block",
    label: "UL",
    style: "unordered-list-item",
    icon: icons.ULIcon,
  },
  {
    type: "block",
    label: "OL",
    style: "ordered-list-item",
    icon: icons.OLIcon,
  },
  { type: "block", label: "H2", style: "header-two", icon: icons.H2Icon },
  {
    type: "block",
    label: "QT",
    style: "blockquote",
    icon: icons.BlockQuoteIcon,
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
