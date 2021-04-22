import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container max-w-screen-xl my-0 min-h-0">
          <div className="bg-purple-700 lg:divide-x lg:divide-black ">
            <Banner
              title="Tu espacio de Futbol Fémenino"
              subtitle="Lee y comparte nuevas perspectivas sobre el futbol femenino. Todos son bienvenidos"
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
