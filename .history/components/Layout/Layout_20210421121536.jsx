import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = () => {
  return (
    <>
      <main>
        <Header />

        <div className="bg-purple-700 b-4 border-gray-800  w-full ">
          <Banner
            title="De Área a Área"
            subtitle="Proyecto social para incentivar el Fútbol femenino"
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Layout;
