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
        img="https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/e35/186783740_388884022289196_7854956855436723058_n.jpg?tp=1&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=bb7kvL2rupkAX-r1Yoh&edm=AABBvjUBAAAA&ccb=7-4&oh=25d0729ff03b1ff1380a679d1b417be0&oe=60C84A64&_nc_sid=83d603"
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
        img="https://instagram.fbog2-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/185785761_770269707009674_6549249304482597348_n.jpg?tp=1&_nc_ht=instagram.fbog2-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=BPFBRchYvFYAX--pf8v&edm=AABBvjUBAAAA&ccb=7-4&oh=f49a81995b6bdbd25f2cf4ac333d6649&oe=60C96787&_nc_sid=83d603"
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
              width={10000}
              height={500}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Nuestro Equipo
          </h2>
          <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-3">
            <CardsUser
              img="https://instagram.fbog2-5.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/89226505_885808458540646_594833344152570836_n.jpg?tp=1&_nc_ht=instagram.fbog2-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=CA9-e5YFpp4AX-Idx23&edm=ABfd0MgBAAAA&ccb=7-4&oh=568197254d3243fdcbfd99839a924bdf&oe=60C8387E&_nc_sid=7bff83"
              title="Lala Lopez"
              paragraph="CEO Co-Founder"
            />
            <CardsUser
              img="https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/92187206_2476017875993304_285885031950319616_n.jpg?tp=1&_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=JjY9LUvp5GMAX-P4V1N&edm=ABfd0MgBAAAA&ccb=7-4&oh=959903f89e7a14406dc319cdc23df8b0&oe=60C8CA3C&_nc_sid=7bff83"
              title="Rafa Román"
              paragraph="CEO Co-Founder"
            />
            <CardsUser
              img="https://scontent-bog1-1.cdninstagram.com/v/t51.2885-19/s150x150/94945309_222672422514384_447152133268045824_n.jpg?tp=1&_nc_ht=scontent-bog1-1.cdninstagram.com&_nc_ohc=OqX5E16-PZsAX9gBKM0&edm=ABfd0MgBAAAA&ccb=7-4&oh=9ff63ad18b83be653303c5830f401382&oe=60C903AF&_nc_sid=7bff83"
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
