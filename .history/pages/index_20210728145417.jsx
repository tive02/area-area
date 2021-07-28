import Head from "next/head";
import Layout from "../components/Layout/Layout";
import CardsPost from "../components/molecules/CardsPost";
import CardMain from "../components/molecules/CardMain";
import PopularTopics from "../components/molecules/PopularTopics";
import Subscribe from "../components/molecules/Subscribe";
import CardSecundary from "../components/molecules/CardSecundary";
//hooks
import usePosts from "../hooks/usePosts";
import { useEffect, useState } from "react";

export default function Home() {
  //State del componente
  const [post, setPost] = useState({});
  const [error, setError] = useState(false);

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
  if (Object.keys(posts).length === 0) return "Cargando...";

  const { posts } = usePosts("created");
  console.log(posts[0]);

  return (
    <Layout>
      <main>
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
          <CardMain post={posts[0]} />
          <CardSecundary post={posts[1]} />
        </div>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/*<!-- post cards -->*/}
          <div className="m-4 container w-auto">
            <div
              className="bg-white rounded grid grid-cols-1 md:grid-cols-2 
              gap-2 place-items-stretch leading-normal space-x-4"
            >
              {posts.map((post) => (
                <CardsPost key={post.id} post={post} />
              ))}
            </div>
          </div>
          {/*<!-- right sidebar -->*/}
          <div className="w-full lg:w-1/3 px-3">
            {/*<!-- topics -->*/}
            <PopularTopics />
            {/*<!-- subscribe -->*/}
            <Subscribe />
          </div>
        </div>
      </main>
      {/*<!-- main ends here -->*/}
    </Layout>
  );
}
