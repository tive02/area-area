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
  const ChangeType = (text, type, data, inlineStyleRanges, key) => {
    switch (type) {
      //usuario escoge titulo en el edito
      case "header-two":
        return (
          <h2 className="text-4xl text-center mb-4 font-semibold font-heading font-semibold font-serif">
            {text}
          </h2>
        );
        break;
      //Usuario escoge el estílo de parráfo en el editor.
      case "unstyled":
        inlineStyleRanges.map((inlineStyle) => {
          const offsetBold = inlineStyle.offset;
          const lengthBold = inlineStyle.length;
          const styleBold = inlineStyle.style;
          const word = text.slice(offsetBold, offsetBold + lengthBold);
          if (styleBold === "BOLD") {
            function boldString(str, substr) {
              let strRegExp = new RegExp(substr, "g");
              return str.replace(strRegExp, `<b>` + substr + "</b>");
            }
            let newTextBold = boldString(text, word);
            return (text = newTextBold.slice());
          } else if (styleBold === "ITALIC") {
            function italicString(str, substr) {
              let strRegExp = new RegExp(substr, "g");
              return str.replace(strRegExp, "<i>" + substr + "</i>");
            }
            let newTextItalic = italicString(text, word);
            return (text = newTextItalic.slice());
          } else {
          }
        });
        return (
          <p className="font-sans" dangerouslySetInnerHTML={{ __html: text }} />
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
          <ul className="m-0 font-sans list-inside list-disc  ">
            <li className="leading-none font-light">{text}</li>
          </ul>
        );
        break;
      case "ordered-list-item":
        const keys = key.split(" ");
        return (keys.map((key) => {
          
            <ol className="m-0 font-sans ">
              <li key={key} className="list-decimal list-inside">
                {text}
              </li>
            </ol>
          );
        });
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
                        block.inlineStyleRanges,
                        block.key
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
