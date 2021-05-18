import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import CardsPost from "../components/molecules/CardsPost";
import CardMain from "../components/molecules/CardMain";
import PopularTopics from "../components/molecules/PopularTopics";
import Subscribe from "../components/molecules/Subscribe";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <div className="block md:flex md:space-x-2 px-2 lg:p-0">
            <CardMain />

            <a
              className="hidden md:block w-full md:w-1/3 relative rounded"
              href="./blog.html"
            >
              <div className="absolute left-0 top-0 w-full h-full z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1572358337087-ca59b858dfd8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                className="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
              <div className="p-4 absolute bottom-0 left-0 z-20">
                <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  Futbol Callejero
                </span>
                <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div className="flex mt-3">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-200 text-sm">
                      Chrishell Staus
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                      {" "}
                      15 Aug{" "}
                    </p>
                  </div>
                </div>
              </div>
            </a>
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
