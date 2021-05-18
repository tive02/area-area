import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import CardsPost from "../components/molecules/CardsPost";
import CardMain from "../components/molecules/CardMain";
import PopularTopics from "../components/molecules/PopularTopics";
import Subscribe from "../components/molecules/Subscribe";
import CardSecundary from "../components/molecules/CardSecundary";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            <CardMain />
            <CardSecundary />
          </div>
          <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            {/*<!-- post cards -->*/}
            <div className="w-full lg:w-2/3">
              <div
                className="bg-white rounded grid grid-cols-1 md:grid-cols-2 
              gap-2 place-items-stretch leading-normal space-x-4"
              >
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
                <CardsPost />
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
    </>
  );
}
