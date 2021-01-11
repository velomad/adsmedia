<template>
  <div>
    <div class="z-20 w-full fixed bg-white top-0">
      <Navbar />
    </div>
    <div
      class="flex mt-36 flex-wrap w-full mb-16 mt-10 flex-col items-center text-center"
    >
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
      >
        Pitchfork Kickstarter Taxidermy
      </h1>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table.
      </p>
    </div>
    <div class="container mx-auto bg-white">
      <div class="flex flex-wrap -mx-4">
        <div
          class="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4 mx-4 md:mx-0 lg:mx-0"
          v-for="(item, index) in dummyArr"
          :key="index"
        >
          <a
            href=""
            class="c-card block bg-white shadow-xl hover:shadow-xl rounded-lg overflow-hidden"
          >
            <div class="relative pb-48 overflow-hidden">
              <img
                class="absolute inset-0 h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                alt=""
              />
            </div>
            <div class="p-4">
              <span
                class="inline-block px-2 py-1 leading-none bg-yellow-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs"
                >Highlight</span
              >
              <h2 class="mt-2 mb-2 font-bold">
                Purus Ullamcorper Inceptos Nibh
              </h2>
              <p class="text-sm">
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec ullamcorper nulla non metus auctor fringilla.
              </p>
              <div class="mt-3 flex items-center">
                <span class="text-sm font-semibold">ab</span>&nbsp;<span
                  class="font-bold text-xl"
                  >45,00</span
                >&nbsp;<span class="text-sm font-semibold">€</span>
              </div>
            </div>
            <div class="p-4 border-t border-b text-xs text-gray-700">
              <span class="flex items-center mb-1">
                <i class="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
              </span>
              <span class="flex items-center">
                <i class="far fa-address-card fa-fw text-gray-900 mr-2"></i>
                Ermäßigung mit Karte
              </span>
            </div>
            <div
              class="p-4 flex items-center justify-between text-sm text-gray-600"
            >
              <div class="flex">
                <span
                  class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
                >
                  <a class="text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path
                        d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                      ></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-gray-500">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </span>
              </div>
              <span
                class="ml-2 uppercase font-bold border-b-2 border-yellow-700"
              >
                Read More</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar/Navbar";
export default {
  name: "Blogs",
  components: {
    Navbar,
  },
  data() {
    return {
      dummyArr: ["1", "2", "3", "4", "5", "6"],
    };
  },
};
</script>
<style scoped>
</style>