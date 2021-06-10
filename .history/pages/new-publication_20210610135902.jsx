import React, { useEffect, useState } from "react";
import { editorStateFromRaw, editorStateToJSON } from "megadraft";
import dynamic from "next/dynamic";
import actions from "megadraft/lib/actions/default";

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
    const customActions = actions.concat([
      { type: "block", label: "H2", style: "header-two", icon: HeaderTwoIcon },
      {
        type: "block",
        label: "H3",
        style: "header-three",
        icon: HeaderThreeIcon,
      },
    ]);
    return (
      //Add some margin left to show plugins sidebar
      <>
        <Header />
        <div class="py-16">
          <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div style={{ marginLeft: 80 }}>
              <MegadraftEditor
                editorState={this.state.editorState}
                onChange={this.onChange}
                placeholder="Agrega tu Articulo en este espacio."
                actions={customActions}
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
          </div>
        </div>
      </>
    );
  }
}

class HeaderTwoIcon extends React.Component {
  render() {
    return (
      <svg {...this.props} height="24" viewBox="0 0 24 24" width="24"></svg>
    );
  }
}

class HeaderThreeIcon extends React.Component {
  render() {
    return (
      <svg {...this.props} height="24" viewBox="0 0 24 24" width="24"> <path d="m259.821 512c-120.803 0-198.402-54.863-212.834-173.343l-1.864-15.305 123.233-11.587 2.498 13.486c9.817 53.006 37.559 76.644 89.948 76.644 29.427 0 79.229-10.302 79.229-48.916 0-13.561-5.799-23.963-34.645-33.89-62.477-20.888-176.513-29.168-222.149-102.487-12.62-20.274-19.02-44.226-19.02-71.19.001-75.592 60.31-145.412 190.043-145.412 135.538 0 195.724 68.578 198.866 155.949l.536 14.893-124.892 5.304-2.258-12.972c-7.025-40.351-26.189-54.652-73.234-54.652-22.99 0-66.469 6.388-66.469 30.563 0 39.286 121.435 39.33 199.729 79.184 52.561 26.788 80.339 73.26 80.339 134.396 0 84.019-62.827 159.335-207.056 159.335zm-180.742-161.708c16.208 88.587 75.485 131.708 180.742 131.708 59.465 0 107.065-14.026 137.655-40.563 32.564-28.249 39.4-63.867 39.4-88.773 0-49.812-21.518-86.035-63.955-107.664-55.78-28.394-132.773-33.986-177.151-54.792-25.853-12.121-38.961-29.321-38.961-51.124 0-44.612 51.066-60.563 96.469-60.563 56.457 0 87.802 20.653 99.975 66.558l68.683-2.917c-9.382-72.487-68.311-112.162-167.676-112.162-118.128 0-160.042 62.172-160.042 115.413 0 113.911 140.908 118.533 220.749 145.248l.116.04c15.028 5.166 54.948 18.889 54.948 62.28 0 54.174-54.602 78.916-109.229 78.916-62.245 0-101.475-29.315-116.492-87.737z"/></g></g></svg></svg>
    );
  }
}
export default newPublication;
