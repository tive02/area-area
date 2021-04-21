import React, { Fragment } from "react";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

const Layout = () => {
  return (
    <>
      <main>
        <Header />

        <div className="relative inset-y-64 bg-purple-700 border-4 border-gray-800  w-full ">
          <Banner
            title="Tu espacio de Futbol Fémenino"
            subtitle="Lee y comparte nuevas perspectivas sobre el futbol femenino. Todos son bienvenidos"
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Layout;
