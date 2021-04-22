import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border">
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
