import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = ({ props, hidden }) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>

      <Footer hidden={hidden} />
    </>
  );
};

export default Layout;
