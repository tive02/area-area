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

class HeaderThreeIcon extends React.Component {
  render() {
    return (
      <svg
        {...this.props}
        id="Layer_1"
        enable-background="new 0 0 500 500"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path d="m411.805 297.548c-6.214-14.94-14.644-28.281-25.098-39.698-10.195-10.99-21.958-20.599-34.921-28.535-12.064-7.463-25.04-14.407-38.639-20.672-13.535-6.104-25.709-11.577-37.661-16.752-11.703-5.016-22.37-10.448-31.625-16.096-8.618-5.372-15.5-11.482-20.501-18.223-4.466-5.922-6.637-12.894-6.637-21.313 0-5.816 1.055-11.327 3.134-16.38.021-.051.042-.103.063-.154 1.853-4.723 4.791-8.765 8.985-12.359 4.383-3.758 9.808-6.696 16.214-8.764 6.811-2.27 14.799-3.374 24.422-3.374 12.736 0 23.936 1.502 34.239 4.593.032.01.064.02.098.029 10.602 3.063 20.134 6.541 28.334 10.338 8.633 4.192 15.5 7.764 20.993 10.919 7.894 4.535 13.208 6.47 17.77 6.47 6.602 0 10.879-2.67 13.278-4.886 2.919-2.676 5.108-6.569 6.534-11.667 1.054-3.915 1.772-8.492 2.195-13.995.362-4.715.531-10.656.531-18.697 0-6.604-.129-12.005-.394-16.493-.303-5.32-.761-9.115-1.465-12.209-.795-3.664-1.805-6.688-3.085-9.249-.045-.09-.091-.179-.139-.267-1.433-2.661-3.662-5.512-6.623-8.473-3.266-3.266-8.542-6.601-17.646-11.152-.059-.03-.118-.059-.179-.087-7.989-3.798-16.963-7.21-27.433-10.431-.037-.012-.074-.023-.112-.034-10.729-3.164-21.813-5.584-32.941-7.194-11.718-1.82-23.565-2.743-35.209-2.743-22.844 0-44.621 2.959-64.728 8.797-20.461 5.94-38.652 15.139-54.104 27.366-15.461 12.341-27.858 27.92-36.861 46.329-9.069 18.681-13.668 40.357-13.668 64.426 0 21.186 3.211 39.647 9.532 54.842 6.315 15.319 14.706 28.753 24.896 39.88 9.284 10.274 20.002 19.332 31.855 26.921 4.652 2.978 10.835 1.621 13.813-3.03s1.621-10.836-3.03-13.814c-10.354-6.63-19.708-14.532-27.845-23.535-8.769-9.577-15.703-20.713-21.211-34.075-5.315-12.778-8.011-28.655-8.011-47.19 0-21.018 3.923-39.754 11.647-55.665 7.68-15.703 18.23-28.979 31.325-39.433 13.568-10.737 29.021-18.527 47.237-23.816 18.296-5.31 38.197-8.003 59.153-8.003 10.636 0 21.466.846 32.19 2.514.036.005.072.011.107.016 10.185 1.471 20.325 3.683 30.142 6.574 9.47 2.916 17.514 5.965 24.584 9.32 8.701 4.355 11.475 6.479 12.355 7.36 2.037 2.037 2.868 3.322 3.095 3.706.354.748.853 2.095 1.371 4.478.456 2.008.79 4.955 1.022 9.029.238 4.054.359 9.213.359 15.336 0 7.517-.15 12.971-.473 17.164-.322 4.19-.85 7.665-1.54 10.234-.224.798-.441 1.369-.615 1.758-.885-.258-3.136-1.09-7.719-3.723-5.916-3.398-13.213-7.196-22.305-11.609-.054-.026-.106-.051-.16-.076-9.127-4.233-19.633-8.079-31.227-11.43-12.18-3.648-25.244-5.421-39.935-5.421-11.807 0-21.864 1.439-30.654 4.37-8.853 2.856-16.59 7.09-22.998 12.583-6.623 5.677-11.521 12.46-14.558 20.164-3.058 7.458-4.607 15.503-4.607 23.914 0 12.745 3.589 23.967 10.621 33.292 6.455 8.701 15.182 16.512 26.017 23.265 10.146 6.193 21.669 12.067 34.212 17.442 11.791 5.105 23.892 10.545 37.278 16.582 12.788 5.892 25.039 12.447 36.452 19.507 11.606 7.105 21.662 15.317 30.697 25.056 8.838 9.653 16.017 21.033 21.35 33.854 5.307 12.648 7.998 28.052 7.998 45.782 0 23.624-4.219 43.716-12.862 61.354-8.847 17.693-20.342 32.017-35.077 43.735-15.13 11.82-32.84 20.824-52.639 26.764-20.143 6.043-42.208 9.107-65.585 9.107-15.846 0-30.19-1.293-43.836-3.95-13.926-2.735-25.628-5.843-35.776-9.5-.032-.012-.064-.023-.098-.034-10.118-3.53-18.637-7.305-25.318-11.221-7.573-4.44-11.586-7.646-13.642-9.592-1.787-1.928-3.17-4.986-4.111-9.093-1.164-5.076-1.754-13.014-1.754-23.594 0-7.307.23-13.223.706-18.088.429-4.402 1.054-7.825 1.858-10.178.433-1.187.825-1.813 1.017-2.08.087-.014.223-.028.413-.028.025.001 2.609.216 9.086 4.491.038.026.077.051.116.076 6.828 4.371 15.236 9.06 24.992 13.938 10.394 5.196 22.787 9.924 36.837 14.051 14.279 4.356 31.148 6.564 50.138 6.564 12.694 0 24.283-1.532 34.528-4.577 10.803-3.313 19.661-7.769 27.081-13.619 7.626-6.012 13.612-13.602 17.791-22.557.02-.042.039-.083.058-.125 3.995-8.879 6.021-18.739 6.021-29.306 0-13.088-3.652-24.464-10.808-33.75-6.603-8.71-15.01-16.226-25.648-22.944-8.651-5.537-18.586-10.868-29.529-15.847-5.025-2.285-10.955-.066-13.243 4.961-2.287 5.027-.065 10.957 4.962 13.244 10.081 4.586 19.175 9.46 27.08 14.52 8.626 5.448 15.313 11.384 20.488 18.211 4.508 5.849 6.698 12.917 6.698 21.605 0 7.693-1.424 14.77-4.231 21.035-2.883 6.155-6.816 11.143-12.021 15.247-5.442 4.291-12.169 7.629-20.48 10.179-8.311 2.471-17.982 3.723-28.746 3.723-17.031 0-31.952-1.92-44.348-5.708-.035-.011-.069-.021-.105-.032-12.934-3.797-24.23-8.092-33.577-12.765-9.101-4.55-16.871-8.876-23.098-12.858-7.922-5.22-14.463-7.757-19.992-7.757-4.683 0-8.865 1.326-12.432 3.941-.09.066-.179.133-.267.202-3.302 2.595-5.865 6.378-7.618 11.245-.015.04-.028.079-.042.119-1.366 3.948-2.283 8.664-2.885 14.836-.538 5.515-.8 12.067-.8 20.03 0 12.422.718 21.34 2.26 28.062 1.782 7.782 4.915 14.045 9.31 18.615.09.094.183.187.276.277 4.05 3.895 9.953 8.126 17.547 12.579 7.788 4.565 17.478 8.883 28.797 12.834 11.101 3.998 23.745 7.365 38.671 10.296 14.937 2.908 30.531 4.321 47.675 4.321 25.324 0 49.324-3.348 71.332-9.951 22.189-6.656 42.108-16.804 59.272-30.213 16.895-13.436 30.549-30.426 40.62-50.569 9.912-20.227 14.938-43.854 14.938-70.227.003-20.403-3.212-38.409-9.541-53.492z" />
            <path d="m220.11 281.703c0-5.523-4.478-10-10-10h-.008c-5.522 0-9.996 4.477-9.996 10s4.481 10 10.004 10 10-4.477 10-10z" />
          </g>
        </g>
      </svg>
    );
  }
}
export default newPublication;
