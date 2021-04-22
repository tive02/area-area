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
            title="Crea, comparte, lee, aprende y sobre todo diviertete a traves tu propio espacio para 
            hablar acerca de 
            fútbol fémenino"
            subtitle="
            En EDteam llevamos más de cinco años enseñando y
            cambiando la vida de miles de personas que han aumentado sus ingresos, 
            encontrado su primer empleo o creado su propia empresa. ¡Tú puedes ser el siguiente!Lee y 
            comparte nuevas perspectivas sobre el futbol femenino. Todos son bienvenidos"
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
