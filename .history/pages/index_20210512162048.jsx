import Head from "next/head";
import Banner from "../components/organisms/Banner";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <Layout>
        <div className=" bg-green-200 h-screen">
          {/* <!-- main post --> */}
          <Banner
            title="¡Buscamos personas como tú!. Que amen el Fútbol Fémenino."
            subtitle="En de Area a Area puedes crear, compartir, leer, aprender y sobre todo diviertirte 
            a traves tu propio espacio para 
            hablar acerca de 
            fútbol fémenino."
            img="https://cdn.pixabay.com/photo/2013/07/12/19/17/goal-154481_960_720.png"
            descripcion=""
          />
        </div>
        <main class="mt-12">
          {/* <!-- featured section --> */}
          <div class="flex flex-wrap md:flex-no-wrap space-x-0 md:space-x-6 mb-16">
            {/* <!-- sub-main posts --> */}
            <div class="w-full md:w-4/7">
              {/* <!-- post 1 --> */}
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {" "}
                    Gadgets{" "}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    At every tiled on ye defer do. No attention suspected oh
                    difficult.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Wonder matter now can estate esteem assure fat roused. Am
                    performed on existence as discourse is. Pleasure friendly at
                    marriage blessing or
                  </p>
                </div>
              </div>

              {/* <!-- post 2 --> */}
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {" "}
                    Bitcoin{" "}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Fond his say old meet cold find come whom. The sir park sake
                    bred.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Integer commodo, sapien ut vulputate viverra, Integer
                    commodo Integer commodo, sapien ut vulputate viverra,
                    Integer commodo
                  </p>
                </div>
              </div>
              {/* <!-- post 3 --> */}
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {" "}
                    Insights{" "}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
              {/* <!-- post 4 --> */}
              <div class="rounded w-full flex flex-col md:flex-row mb-10">
                <img
                  src="https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                  class="block md:hidden lg:block rounded-md h-64 md:h-32 m-4 md:m-0"
                />
                <div class="bg-white rounded px-4">
                  <span class="text-green-700 text-sm hidden md:block">
                    {" "}
                    Cryptocurrency{" "}
                  </span>
                  <div class="md:mt-0 text-gray-800 font-semibold text-xl mb-2">
                    Advice me cousin an spring of needed. Tell use paid law ever
                    yet new.
                  </div>
                  <p class="block md:hidden p-2 pl-0 pt-1 text-sm text-gray-600">
                    Meant to learn of vexed if style allow he there. Tiled man
                    stand tears ten joy there terms any widen.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end featured section --> */}

          {/* <!-- recent posts --> */}
          <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 class="font-bold text-3xl">Latest news</h2>
            <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div class="block space-x-0 lg:flex lg:space-x-6">
            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p class="text-gray-700 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p class="text-gray-700 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p class="text-gray-700 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end recent posts --> */}

          {/* <!-- subscribe --> */}
          <div class="rounded flex md:shadow mt-12">
            <img
              src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
              class="w-0 md:w-1/4 object-cover rounded-l"
            />
            <div class="px-4 py-2">
              <h3 class="text-3xl text-gray-800 font-bold">
                Subscribe to newsletter
              </h3>
              <p class="text-xl text-gray-700">
                We sent latest news and posts once in every week, fresh from the
                oven
              </p>
              <form class="mt-4 mb-10">
                <input
                  type="email"
                  class="rounded bg-gray-100 px-4 py-2 border focus:border-green-400"
                  placeholder="john@tech.com"
                />
                <button class="px-4 py-2 rounded bg-green-800 text-gray-100">
                  Subscribe
                  <i class="bx bx-right-arrow-alt"></i>
                </button>
                <p class="text-green-900 opacity-50 text-sm mt-1">
                  No spam. We promise
                </p>
              </form>
            </div>
          </div>
          {/* <!-- ens subscribe section --> */}

          {/* <!-- popular posts --> */}
          <div class="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
            <h2 class="font-bold text-3xl">Popular news</h2>
            <a class="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
              View all
            </a>
          </div>
          <div class="block space-x-0 lg:flex lg:space-x-6">
            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  Put all speaking her delicate recurred possible.
                </h2>
                <p class="text-gray-700 mt-2">
                  Set indulgence inquietude discretion insensible bed why
                  announcing. Middleton fat two satisfied additions. So
                  continued he or commanded household smallness delivered. Door
                  poor on do walk in half. Roof his head the what.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  Is at purse tried jokes china ready decay an.{" "}
                </h2>
                <p class="text-gray-700 mt-2">
                  Small its shy way had woody downs power. To denoting admitted
                  speaking learning my exercise so in. Procured shutters mr it
                  feelings. To or three offer house begin taken am at.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>

            <div class="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
              <img
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                class="rounded"
                alt="technology"
              />
              <div class="p-4 pl-0">
                <h2 class="font-bold text-2xl text-gray-800">
                  As dissuade cheerful overcame so of friendly he indulged
                  unpacked.
                </h2>
                <p class="text-gray-700 mt-2">
                  Alteration connection to so as collecting me. Difficult in
                  delivered extensive at direction allowance. Alteration put use
                  diminution can considered sentiments interested discretion.
                </p>

                <a
                  href="#"
                  class="inline-block py-2 rounded text-green-900 mt-2 ml-auto"
                >
                  {" "}
                  Read more{" "}
                </a>
              </div>
            </div>
          </div>
          {/* <!-- end popular posts --> */}
        </main>
      </Layout>
    </>
  );
}