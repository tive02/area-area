import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div
          className="bg-purple-700 border-4 border-gray-800  pt-4 w-full flex md:p-8 
    border-2 divide-x divide-black"
        >
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
