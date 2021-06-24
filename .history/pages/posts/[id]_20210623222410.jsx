import React from "react";
import { useRouter } from "next/router";

//Importa componentes
import Layout from "../../components/Layout/Layout";

const Post = () => {
  //Routing para obtener el id, de firebase
  const router = useRouter();

  return (
    <Layout>
      <h1>Desde [id].js post</h1>
    </Layout>
  );
};

export default Post;
