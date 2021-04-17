import Head from "next/head";

import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main>
        <Banner
          title="De Área a Área"
          subtitle="Proyecto social para incentivar el Fútbol femenino"
          img=""
          Description=""
        />
      </main>
    </Layout>
  );
}
