<template>
  <section class="bg-gray-900 body-font" id="BusinessDeserves" v-view.once="reRenderUI">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container space-y-4 px-5 py-10 md:py-24 lg:py-24 mx-auto">
            <div>
              <h1 class="text-3xl title-font text-white tracking-widest">
                Creative Digital Marketing
              </h1>
              <h2 class="text-xl title-font text-gray-500 tracking-widest">
                to Fuel Your Company’s Revenue
              </h2>
            </div>
            <p class="leading-relaxed mb-4 text-white">
              Every account is assigned to a committed account Manager. Each of
              our affiliate managers is highly skilled in the af filiate
              marketing and campaign promotion. And we will work with you to
              achieve your goals!
            </p>

            <p class="leading-relaxed mb-4 text-white">
              Our team implements multifaceted strategies designed for your
              business to generate results month after month. We c are about
              your achievement. Which is why we put a sign on the results and
              service that we provide to you. After all, your achievement is
              what fuels our own.
            </p>
          </div>
        </section>
      </div>
      <div
       :key="rerenderUI + 1"
        class="hidden md:block lg:block lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 md:mt-28 lg:mt-28"
      >
        <sequential-entrance delay="600" fromTop>
          <div class="flex relative pb-16 first">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              style="
                background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
              "
              class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium mt-2 title-font text-sm text-gray-200 mb-0 tracking-wider"
              >
                Connect with qualified Industry Experts.
              </h2>
            </div>
          </div>
          <div class="flex relative pb-16" v-view.once="onceHandler">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              style="
                background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
              "
              class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
              >
                Save Time & Earn 30% more.
              </h2>
            </div>
          </div>

          <div class="flex relative pb-16">
            <div
              class="h-full w-10 absolute inset-0 flex items-center justify-center"
            >
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              style="
                background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
              "
              class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
              >
                100% Timely Reports and Payments.
              </h2>
            </div>
          </div>
          <div class="flex relative">
            <div
              style="
                background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
              "
              class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <h2
                class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
              >
                Responsive, Professional Service.
              </h2>
            </div>
          </div>
        </sequential-entrance>
      </div>
    </div>

    <!-- Mobile -->
    <section class="md:hidden lg:hidden text-gray-600 body-font">
      <div class="container px-5 py-2 mx-auto flex flex-wrap">
        <div class="flex flex-wrap w-full">
          <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            <div class="flex relative pb-12">
              <div
                class="h-full w-10 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                style="
                  background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
                "
                class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium mt-2 title-font text-sm text-gray-200 mb-0 tracking-wider"
                >
                  Solutions Crafted To Your Business Needs.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div
                class="h-full w-10 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                style="
                  background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
                "
                class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
                >
                  Experienced, Knowledgeable Team.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-12">
              <div
                class="h-full w-10 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                style="
                  background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
                "
                class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
                >
                  Results Focused, Value Driven.
                </h2>
              </div>
            </div>
            <div class="flex relative pb-12">
              <!-- <div
                class="h-full w-10 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div> -->
              <div
                style="
                  background: linear-gradient(90deg, #ff8657 0%, #ff3225 120%);
                "
                class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <h2
                  class="font-medium mt-2 title-font text-sm text-gray-200 mb-1 tracking-wider"
                >
                  Responsive, Professional Service.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  name: "Agency",
  data() {
    return {
      rerenderUI : 0
    };
  },
  methods: {
    reRenderUI(){
      console.log('Rerender ++');
      this.rerenderUI +=1; 
    },
    onceHandler(e) {
      console.log("calling agency...", e.target);
      var doc = document.documentElement;
      var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
      console.log("calling agency top...", top);
    },
  },
};
</script>
<style scoped></style>
