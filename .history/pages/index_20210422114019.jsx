import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className=" absolute left-0 top-0 ">
          <div className="bg-purple-700 divide-x divide-black">
            <Banner
              title="Tu espacio de Futbol Fémenino"
              subtitle="Lee y comparte nuevas perspectivas sobre el futbol femenino. Todos son bienvenidos"
            />
          </div>
        </div>
        <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border"></div>
      </Layout>
    </>
  );
}
