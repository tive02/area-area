import React from "react";

import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import SubBanner from "../components/organisms/SubBanner";

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
        img="https://instagram.fbog2-3.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/185785761_770269707009674_6549249304482597348_n.jpg?tp=1&_nc_ht=instagram.fbog2-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=BPFBRchYvFYAX--pf8v&edm=AABBvjUBAAAA&ccb=7-4&oh=f49a81995b6bdbd25f2cf4ac333d6649&oe=60C96787&_nc_sid=83d603"
        title3="Proyecto de integración para el fútbol femenino"
        p4="Estamos aquí para promover que las mujeres y el fútbol se acerquen cada día más.  Queremos proporcionar... el mejor contenido futbolístico. 
Empoderar, fortalecer y motivar a cada futbolista es nuestra misión. ¡Anímate a hacer parte del cambio!
"
      />

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <img
                    className="object-cover object-center w-full rounded-md shadow"
                    src="https://instagram.fbog2-4.fna.fbcdn.net/v/t51.2885-15/e35/82573387_652956875440356_4342935756583225788_n.jpg?tp=1&_nc_ht=instagram.fbog2-4.fna.fbcdn.net&_nc_cat=100&_nc_ohc=QG-pAp9SnFEAX99L6b-&edm=AABBvjUBAAAA&ccb=7-4&oh=372dc3eacebd184cf4a650ebbda46645&oe=60CA4466&_nc_sid=83d603"
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

          <img
            className="object-cover object-center w-full mt-16 rounded-md shadow h-80"
            src="https://instagram.fbog2-5.fna.fbcdn.net/v/t51.2885-15/e35/82302445_781992008945734_1034068573671368539_n.jpg?tp=1&_nc_ht=instagram.fbog2-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=6Iwbf4wClUMAX9bPBCP&edm=AABBvjUBAAAA&ccb=7-4&oh=2dee892886fcf20a3f32399339af3f9d&oe=60C8A333&_nc_sid=83d603"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Leadership
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

          <div className="grid gap-8 mt-6 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <h3 className="mt-2 font-medium text-gray-700">John Doe</h3>
              <p className="text-sm text-gray-600">CEO</p>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <h3 className="mt-2 font-medium text-gray-700">John Doe</h3>
              <p className="text-sm text-gray-600">CEO</p>
            </div>

            <div>
              <img
                className="object-cover object-center w-full h-64 rounded-md shadow"
                src="https://images.unsplash.com/photo-1614030126544-b79b92e29e98?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              />
              <h3 className="mt-2 font-medium text-gray-700">John Doe</h3>
              <p className="text-sm text-gray-600">CEO</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
