import React, { Fragment } from "react";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import Editor from "../components/organisms/Editor";
import Header from "../components/organisms/Header";

const newPublication = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        {/* {/*<!-- main post -->*/}

        <Editor />
      </div>
    </>
  );
};

export default newPublication;
