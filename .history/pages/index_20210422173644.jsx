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
            title="¡Buscamos personas como tú!. Que amen el Fútbol Fémenino."
            subtitle="En de Area a Area puedes crear, compartir, leer, aprender y sobre todo diviertirte 
            a traves tu propio espacio para 
            hablar acerca de 
            fútbol fémenino."
            img="https://cdn.pixabay.com/photo/2013/07/12/19/17/goal-154481_960_720.png"
            descripcion=""
          />
        </div>

        <div className="container max-w-screen-lg my-0 mx-auto min-h-0 box-border"></div>
      </Layout>
    </>
  );
}