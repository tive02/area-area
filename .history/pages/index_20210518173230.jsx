import Head from "next/head";
import Layout from "../components/Layout/Layout";
import { Fragment } from "react";
import CardsPost from "../components/molecules/CardsPost";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <div class="block md:flex md:space-x-2 px-2 lg:p-0">
            <a
              class="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block h-screen"
              href="#"
            >
              <img
                src="data:image/jpeg;base64,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"
                class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
              <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  freestyle
                </span>
                <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                  Pellentesque a consectetur velit, ac molestie ipsum. Donec
                  sodales, massa et auctor.
                </h2>
                <div class="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-200 text-sm">
                      Jorge Moreno
                    </p>
                    <p class="font-semibold text-gray-400 text-xs"> 02 Nov </p>
                  </div>
                </div>
              </div>
            </a>

            <a
              class="hidden md:block w-full md:w-1/3 relative rounded"
              href="./blog.html"
            >
              <div class="absolute left-0 top-0 w-full h-full z-10"></div>
              <img
                src="data:image/jpeg;base64,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"
                class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
              <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  Futbol Callejero
                </span>
                <h2 class="text-3xl font-semibold text-gray-100 leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </h2>
                <div class="flex mt-3">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/M/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
                    class="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p class="font-semibold text-gray-200 text-sm">
                      Chrishell Staus
                    </p>
                    <p class="font-semibold text-gray-400 text-xs"> 15 Aug </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            {/*<!-- post cards -->*/}
            <div class="w-full lg:w-2/3">
              <div
                class="bg-white rounded grid grid-cols-1 md:grid-cols-2 
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
            <div class="w-full lg:w-1/3 px-3">
              {/*<!-- topics -->*/}
              <div class="mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                  Popular Topics
                </h5>
                <ul>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Soccer
                      <span class="text-gray-500 ml-auto">23 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                      Futbol Callejero
                      <span class="text-gray-500 ml-auto">18 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                      Freestyle
                      <span class="text-gray-500 ml-auto">34 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                      Copa Mundial
                      <span class="text-gray-500 ml-auto">9 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/*<!-- subscribe -->*/}
              <div class="p-1 mt-4 mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">
                  Suscribete
                </h5>
                <p class="text-gray-600">
                  Suscríbete a nuestro boletín. Entregamos los mejores artículos
                  relacionados con rl fútbol femenino en tu bandeja de entrada.
                </p>
                <input
                  placeholder="Tu dirección de email"
                  class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
                />
                <button class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                  Suscribete
                </button>
              </div>
            </div>
          </div>
        </main>
        {/*<!-- main ends here -->*/}
      </Layout>
    </>
  );
}
