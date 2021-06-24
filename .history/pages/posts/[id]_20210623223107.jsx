import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

//Importa componentes
import Layout from "../../components/Layout/Layout";

import { FirebaseContext } from "../../firebase";

const Post = () => {
  //State del componente
  const [post, setPost] = useState({});

  //Routing para obtener el id, de firebase
  const router = useRouter();
  const {
    query: { id },
  } = router;

  //Context de firebase
  const { firebase } = useContext(FirebaseContext);

  //useEffect para validar la existencia del ID
  useEffect(() => {
    if (id) {
    }
  }, [id]);

  return (
    <Layout>
      <h1>Desde {id} post</h1>
    </Layout>
  );
};

export default Post;
