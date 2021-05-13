import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

export default function newPublication(props) {
  const [editorStateFromRaw, setEditorStateFromRaw] = useState(null)
  onChange = (setEditorStateFromRaw) => {
    ...editorStateFromRaw,
    setEditorStateFromRaw()
  };
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

ReactDOM.render(<App />, document.getElementById("container"));
