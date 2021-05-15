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
                  Nutrition
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
                      {" "}
                      Mike Sullivan{" "}
                    </p>
                    <p class="font-semibold text-gray-400 text-xs"> 14 Aug </p>
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
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80"
                class="absolute left-0 top-0 w-full h-full rounded z-0 object-cover"
              />
              <div class="p-4 absolute bottom-0 left-0 z-20">
                <span class="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                  Science
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
                  {" "}
                  Popular Topics{" "}
                </h5>
                <ul>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a
                      href="#"
                      class="flex items-center text-gray-600 cursor-pointer"
                    >
                      <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Nutrition
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
                      Food & Diet
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
                      Workouts
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
                      Immunity
                      <span class="text-gray-500 ml-auto">9 articles</span>
                      <i class="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/*<!-- divider -->*/}
              <div class="border border-dotted"></div>

              {/*<!-- subscribe -->*/}
              <div class="p-1 mt-4 mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 mb-2">
                  {" "}
                  Subscribe{" "}
                </h5>
                <p class="text-gray-600">
                  Subscribe to our newsletter. We deliver the best health
                  related articles to your inbox
                </p>
                <input
                  placeholder="your email address"
                  class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
                />
                <button class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                  Subscribe
                </button>
              </div>

              {/*<!-- divider -->*/}
              <div class="border border-dotted"></div>
            </div>
          </div>
        </main>
        {/*<!-- main ends here -->*/}
      </Layout>
    </>
  );
}
