import React, { Fragment, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

//Importa componentes
import Layout from "../../components/Layout/Layout";

import { FirebaseContext } from "../../firebase";
import Error404 from "../../components/Layout/404";

const Post = () => {
  //State del componente
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

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
      const getPost = async () => {
        const postQuery = await firebase.db.collection("posts").doc(id);
        const post = await postQuery.get();
        if (post.exists) {
          setPost(post.data());
        } else {
          setError(true);
        }
      };
      getPost();
    }
  }, [id]);

  if (Object.keys(post).length === 0 && !error) return "Cargando...";

  const {
    title,
    tags,
    urlImg,
    resume,
    content,
    votes,
    comments,
    created,
    creator,
    voted,
  } = post;

  const contents = JSON.parse(content);

  console.log(contents);

  return (
    <Layout>
      <Fragment>
        {error ? (
          <Error404 />
        ) : (
          <main>
            <h1>{title}</h1>
          </main>
        )}
      </Fragment>
    </Layout>
  );
};

export default Post;
