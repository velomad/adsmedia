<template>
  <div>
    <div class="hidden z-20 w-full fixed bg-white top-0">
      <Navbar />
    </div>
    <!-- <div
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
    </div> -->
    <div>
      <div
        class="bannerFondo bg-left-top bg-auto bg-repeat-x"
        style="
          background-image: url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80);
        "
      ></div>
      <div style="margin-top: -28rem" class="w-full px-16">
        <nav class="bg-transparent shadow-lg">
          <div class="md:flex items-center justify-between py-2 px-8 md:px-12">
            <div class="flex justify-between items-center">
              <div class="text-2xl font-bold text-white md:text-3xl">
                <a href="#">AdsRevenue</a>
              </div>
              <div class="md:hidden">
                <button
                  type="button"
                  class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
                >
                  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path
                      class="hidden"
                      d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
                    />
                    <path
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="flex flex-col md:flex-row hidden md:block -mx-2">
              <a
                href="#"
                class="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                >Home</a
              >
              <a
                href="#"
                class="text-white rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"
                >Careers</a
              >
            </div>
          </div>
        </nav>
        <div class="w-full text-center">
          <p class="text-sm tracking-widest text-white font-bold">AdsRevenue</p>
          <h1 class="font-bold text-5xl text-white">Blogs</h1>
        </div>

        <div
          class="w-full bg-white mt-6 rounded overflow-hidden shadow-xl hover:bg-white transition duration-500"
        >
          <!-- <div class="p-2 sm:p-10 w-full text-center cursor-pointer">
            <div
              class=""
            >
              <div class="space-y-10">
                <i class="fa fa-spa" style="font-size: 48px"></i>

                <div class="px-6 py-4">
                  <div class="space-y-5">
                    <div class="font-bold text-xl mb-2">Spa</div>
                    <p class="text-gray-700 text-base">
                      Todo tipo de masajes y técnicas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
          <!-- component -->
          <div class="w-full">
            <div class="flex bg-white" style="height: 350px">
              <div
                class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2"
              >
                <div>
                  <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">
                    Build Your New <span class="text-indigo-600">Idea</span>
                  </h2>
                  <p class="mt-2 text-sm text-gray-500 md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Blanditiis commodi cum cupiditate ducimus, fugit harum id
                    necessitatibus odio quam quasi, quibusdam rem tempora
                    voluptates. Cumque debitis dignissimos id quam vel!
                  </p>
                  <div class="flex justify-center lg:justify-start mt-6">
                    <a
                      class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                      href="#"
                      >Get Started</a
                    >
                    <a
                      class="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                      href="#"
                      >Learn More</a
                    >
                  </div>
                </div>
              </div>
              <div
                class="hidden lg:block lg:w-1/2"
                style="clip-path: polygon(10% 0, 100% 0%, 100% 100%, 0 100%)"
              >
                <div
                  class="h-full object-cover"
                  style="
                    background-image: url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80);
                  "
                >
                  <div class="h-full bg-black opacity-25"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
.bannerFondo {
  height: 450px;
}
</style>