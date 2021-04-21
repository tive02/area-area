import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <div className="bg-red-500">
          <h1>Hola mundo</h1>
          <Banner
            title="De Área a Área"
            subtitle="Proyecto social para incentivar el Fútbol femenino"
          />
        </div>
      </main>
    </Layout>
  );
}
