import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}

        <Footer />
      </main>
    </>
  );
};

export default Layout;
