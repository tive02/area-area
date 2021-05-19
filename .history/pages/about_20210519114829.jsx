import React from "react";
import Image from "next/image";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import SubBanner from "../components/organisms/SubBanner";
import CardsUser from "../components/molecules/CardsUser";

const About = () => {
  return (
    <Layout>
      {/* {/*<!-- Banners principals  -->*/}
      <Banner
        title="¡Buscamos personas como tú!. Que amen el Fútbol Fémenino."
        description="En de Area a Area puedes crear, compartir, leer, aprender y sobre todo diviertirte 
            a traves tu propio espacio para 
            hablar acerca de 
            fútbol fémenino."
        img="/about/Equipo_camisa_Blanca.jpg"
      />
      <SubBanner
        leftCardTitle="Fútbol Urbano"
        leftCardParagraph="Hinchadas, Historia,forma, modas, desempeño actual,etc."
        centerCardTitle="Fútbol Aficionado"
        centerCardParagraph="Fútbol universitario, Fútbol Formativo."
        rightCardTitle="Fútbol profesional"
        rightCardParagraph="Hinchadas, Historia,forma, modas, desempeño actual,etc."
        titleDescription="Proyecto de integración para el fútbol femenino"
        paragraphDescription="Estamos aquí para promover que las mujeres y el fútbol se acerquen cada día más.
          Queremos proporcionar... el mejor contenido futbolístico."
        img="/about/Equipo_camisa_amarilla.jpg"
        altImg=""
        titleCard="Somos como tu!"
        paragraphCard="Hinchas, amigas, personas, amantes del fútbol femenino, 
        y queremos dar nuestro granito de arena para potenciar la practica del deporte rey por 
        parte de las mujeres en el mundo 
        "
      />

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <Image
                    src="/about/Pateo_Femenino.jpg"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">
                Nuestra Misión
              </h3>
              <p className="max-w-md mt-4 text-gray-600">
                “Promover el empoderamiento y la participación de la mujer en la
                práctica del fútbol; resaltando su valiosa labor y reconociendo
                el avance histórico que ha tenido dentro de este deporte, esto,
                a través de la generación de contenido futbolístico en la web,
                que permita fortalecer los espacios de reflexión y participación
                deportiva".
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <h4 className="text-3xl font-semibold text-gray-800">
            Nuestra Visión
          </h4>
          <p className="max-w-lg mx-auto mt-4 text-gray-600">
            Para el año 2022, De Área a Área pretende consolidar una comunidad
            significativa que permita generar impacto social y desarrollar
            escenarios para el fútbol femenino.
          </p>
          <div className="object-cover object-center w-full mt-16 rounded-md shadow h-80">
            <Image
              src="/about/Entrenamiento.jpg"
              alt="Picture of the author"
              layout="responsive"
              width={1000}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Nuestro Equipo
          </h2>
          <div className="grid gap-2 lg:gap-8 mt-6 grid-cols-1  lg:grid-cols-3">
            <CardsUser
              img="/about/Lala.jpg"
              title="Lala Lopez"
              paragraph="CEO Co-Founder"
            />
            <CardsUser
              img="/about/Roman.jpg"
              title="Rafa Román"
              paragraph="CEO Co-Founder"
            />
            <CardsUser
              img="/about/Steven.jpg"
              title="Steven Moreno"
              paragraph="CEO Co-Founder"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
