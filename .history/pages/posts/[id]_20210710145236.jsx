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
  //Return mientras trae los datos de BD
  if (Object.keys(post).length === 0 && !error) return "Cargando...";
  //Desestructuring de post
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

  //convertir el contenido del post en JSON
  const { blocks, entityMap } = JSON.parse(content);
  //destructuring de los bloqueos
  const { data, depth, entityRanges, inlineStyleRanges, key, text, type } =
    blocks;
  //Prueba informacion para eliminar
  console.log(blocks);
  console.log(entityMap);

  //metodo para revisar cual es el tipo de contenido. y renderizar los componentes correspondientes
  const ChangeType = (text, type, data, inlineStyleRanges) => {
    switch (type) {
      //usuario escoge titulo en el edito
      case "header-two":
        return <h2 className="bg-red-500">{text}</h2>;
        break;
      //Usuario no escoge estilo en el editor
      case "unstyled":
        inlineStyleRanges.map((inlineStyle) => {
          const offsetBold = inlineStyle.offset;
          const lengthBold = inlineStyle.length;
          const styleBold = inlineStyle.style;
          const word = text.slice(offsetBold, offsetBold + lengthBold);
          switch (styleBold) {
            case "BOLD":
              let strong = document.createElement("p");
              let newWord = document.createTextNode(word);
              strong.appendChild(newWord);
              console.log(strong);
              text = text.replace(word, strong);
              const newText = text;
              console.log(text);
              break;
            case "ITALIC":
              //function replacerItalic(word) {
              //  return `<i className="bg-blue-500">${word}</i>`;
              //}
              //return (text = text.replace(word, replacerItalic(word)));
              break;

            default:
              break;
          }
        });

        return (
          <div
            className=""
            id="new"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
        );
        break;
      case "atomic":
        if (data.type == "image") {
          return <img src={data.src} type={data.type} alt={data.caption} />;
        } else {
          return (
            <a href={data.src} target="_blank" rel="noopener noreferrer">
              pulsa aqui para ver tu video
            </a>
          );
        }
        break;
      case "blockquote":
        return (
          <blockquote className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
            {text}
          </blockquote>
        );
        break;

      case "unordered-list-item":
        return (
          <ul className="bg-green-500">
            <li>{text}</li>
          </ul>
        );
        break;
      case "ordered-list-item":
        return (
          <ol className="bg-yellow-500">
            <li>{text}</li>
          </ol>
        );
        break;
      default:
        break;
    }
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
                  {blocks.map((block) => (
                    <div className="pb-6" key={block.key} id={block.key}>
                      {ChangeType(
                        block.text,
                        block.type,
                        block.data,
                        block.inlineStyleRanges
                      )}
                    </div>
                  ))}
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
