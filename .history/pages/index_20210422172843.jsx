import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className=" bg-green-200 h-screen">
          <Banner
            title="En de Area a Area ¡Buscamos personas como tú!. Que compartan nuestra pasión por el Fútbol Fémenino."
            subtitle="Crea, comparte, lee, aprende y sobre todo diviertete a traves tu propio espacio para 
            hablar acerca de 
            fútbol fémenino. Todos son bienvenidos"
            img="https://cdn.pixabay.com/photo/2013/07/12/19/17/goal-154481_960_720.png"
            descripcion=""
          />
        </div>

        <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border">
          <Banner
            title="Tu espacio de Futbol Fémenino"
            subtitle="Lee y comparte nuevas perspectivas sobre el futbol femenino. Todos son bienvenidos"
          />
        </div>
      </Layout>
    </>
  );
}
