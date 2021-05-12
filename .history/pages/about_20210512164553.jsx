import React from "react";

import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className=" bg-green-200 h-screen">
        {/* {/*<!-- main post -->*/}
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
    </Layout>
  );
};

export default About;
