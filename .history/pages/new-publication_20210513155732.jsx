import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { MegadraftEditor, editorStateFromRaw } from "megadraft";

//Import megadraft.css
import "megadraft/dist/css/megadraft.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    const [editorState, setEditorState] = useState({
      editorStateFromRaw: null,
    });
  }

  onChange = () => {
    setEditorState(editorStateFromRaw(editorState));
  };

  render() {
    export default function newPublication() {
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
}
if (typeof window !== "undefined") {
  ReactDOM.render(<App />, document.getElementById("container"));
}
