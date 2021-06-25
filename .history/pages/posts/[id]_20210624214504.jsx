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

  const { blocks, entityMap } = JSON.parse(content);

  const { data, depth, entityRanges, inlineStyleRanges, key, text, type } =
    blocks;

  console.log(blocks);
  console.log(entityMap);

  //metodo para revisar cual es el tipo de contenido
  let ChangeType = () => {
    blocks.map((block)=>(
    switch (type) {
      case "header-two":
        <h2>{text}</h2>;
        break;
      case "unstyled":
        <p>{text}</p>;
        break;
      case "atomic":
        <img src={data.src} type={data.type} alt={data.caption} />;
        break;
      case "blockquote":
        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
          {text}
        </div>;
        break;

      case "unordered-list-item":
        <ul>
          <li>{text}</li>
        </ul>;
        break;
      case "ordered-list-item":
        <ol>
          <li>{text}</li>
        </ol>;
        break;
      default:
        break;
    })
  };

  return (
    <Layout>
      <Fragment>
        {error ? (
          <Error404 />
        ) : (
          <div className="flex justify-center ">
            <main className="container max-w-screen-md lg:w-2/4 space-y-6 py-10">
              <div className="mb-4 md:mb-0 w-full mx-auto relative space-y-5 ">
                <div className="px-4 lg:px-0">
                  <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                    {title}
                  </h2>
                  <p className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
                    {creator.name}
                  </p>
                </div>
                <img src={urlImg} className="w-full object-cover lg:rounded" />
              </div>

              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="px-4 lg:px-0 text-gray-700 text-lg leading-relaxed w-full">
                  {ChangeType()}

                  <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                    Sportsman do offending supported extremity breakfast by
                    listening. Decisively advantages nor expression unpleasing
                    she led met. Estate was tended ten boy nearer seemed. As so
                    seeing latter he should thirty whence. Steepest speaking up
                    attended it as. Made neat an on be gave show snug tore.
                  </div>

                  <p className="pb-6">
                    Exquisite cordially mr happiness of neglected distrusts.
                    Boisterous impossible unaffected he me everything. Is fine
                    loud deal an rent open give. Find upon and sent spot song
                    son eyes. Do endeavor he differed carriage is learning my
                    graceful. Feel plan know is he like on pure. See burst found
                    sir met think hopes are marry among. Delightful remarkably
                    new assistance saw literature mrs favourable.
                  </p>
                </div>
              </div>
            </main>
          </div>
        )}
      </Fragment>
    </Layout>
  );
};

export default Post;
