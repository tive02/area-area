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
  const { posts } = usePosts("created");

  //Return mientras trae los datos de BD
  if (Object.keys(posts).length === 0) return "Cargando...";

  console.log(posts[0]);
  console.log(Object.values(posts[0]));

  return (
    <Layout>
      <main>
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
          <CardMain post={Object.values(posts[0])} />
          <CardSecundary post={Object.values(posts[1])} />
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
            {/* {<PopularTopics />} */}
            {/*<!-- subscribe -->*/}
            <Subscribe />
          </div>
        </div>
      </main>
      {/*<!-- main ends here -->*/}
    </Layout>
  );
}
