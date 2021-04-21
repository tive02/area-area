import React, { Fragment } from "react";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-red-500">
          <h1>Hola mundo</h1>
          <Banner
            title="De Área a Área"
            subtitle="Proyecto social para incentivar el Fútbol femenino"
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
