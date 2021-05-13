import React from "react";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import Editor from "../components/organisms/Editor";

const newPublication = () => {
  return (
    <Layout>
      <div className=" bg-green-200 h-screen">
        {/* {/*<!-- main post -->*/}

        <Editor />
      </div>
    </Layout>
  );
};

export default newPublication;
