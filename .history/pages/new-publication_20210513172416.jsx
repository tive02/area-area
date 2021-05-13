import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

class newPublication extends React.Component {
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
          placeholder="Add some text"
        />
      </div>
    );
  }
}

if (typeof window === "object") {
  document.getElementById("container"), (<newPublication />);
}

export default newPublication;
