<template>
  <div>
    <div
      class="hidden md:block lg:block flex py-28 justify-center items-center"
    >
      <div class="px-20 inner">
        <div class="grid place-items-center md:grid-cols-2 gap-8">
          <div class="space-y-8 space-x-0 md:space-x-8 lg:space-x-8">
            <div
              class="text-6xl text-left font-semibold text-gray-700 ml-0 md:ml-8 lg:ml-8"
            >
              Who we are ?
            </div>
            <div class="text-justify text-md text-gray-600">
              Adsrevenue is an interactive Digital Consulting Agency based in
              mumbai providing an exclusive service in Digital Marketing also
              Rated as one of the fastest growing affiliated network in India.
              We are specialist in high quality analysis to drive every aspect
              of your brands, marketing, planning, technology & creative
              content. Adsrevenue is the most trusted performance marketing
              partner for advertisers Beacause our ideology is to work as
              business partners for better ROI rather than just being the
              delivery partners.The Digital Edge! We believe in delivering
              performance, transparently and innovatively.
            </div>
            <div class="flex justify-center">
              <div class="flex -m-4">
                <div class="p-4 md:w-2/2 w-full">
                  <div class="flex">
                    <div
                      style="background-color: #e8f4fe"
                      class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                    >
                      <svg
                        class="w-6 h-6"
                        style="color: #ed7265"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                        ></path>
                      </svg>
                    </div>
                    <h4 class="text-2xl text-gray-700 font-semibold ml-4">
                      Increase
                    </h4>
                  </div>
                  <p class="pt-4 md:w-2/2 w-full text-gray-500 font-semibold">
                    We create your presence. Build credibility and trust.
                  </p>
                  <!-- <button
                  style="background: #ff8657"
                  class="mt-10 hidden md:block hover:bg-gray-900 lg:block inline-flex text-white font-semibold border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Our Offering
                </button> -->
                </div>
                <div class="p-4 md:w-2/2 w-full">
                  <div class="flex">
                    <div
                      style="background-color: #e8f4fe"
                      class="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                    >
                      <svg
                        class="w-6 h-6"
                        style="color: #ed7265"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h4 class="text-2xl text-gray-700 font-semibold ml-4">
                      Brand
                    </h4>
                  </div>
                  <p class="p-4 md:w-2/2 text-gray-500 w-full font-semibold">
                    We create your presence. Build credibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="floating2">
              <div
                style="
                  background: #ff8657;
                  box-shadow: 5px 15px 20px rgba(178, 232, 255, 0.3);
                "
                class="p-3 rounded-2xl w-full shadow-xl"
              >
                <div class="grid place-items-center py-10 space-y-4">
                  <div>
                    <img src="/img/buy.svg" width="35" />
                  </div>

                  <number
                    v-view.once="onceHandler"
                    animationPaused
                    class="text-3xl text-white"
                    ref="number1"
                    :from="100"
                    :to="10000"
                    :class="{ scaleBig: false }"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power4.easeOut"
                  />
                  <div class="text-lg text-white">Impressions delivered</div>
                </div>
              </div>
            </div>

            <div class="floating">
              <div
                style="
                  background: #efdff7;
                  box-shadow: 5px 15px 20px rgba(178, 232, 255, 0.3);
                "
                class="p-3 rounded-2xl w-full shadow-xl"
              >
                <div class="grid place-items-center py-10 px-6 space-y-4">
                  <div>
                    <img src="/img/buy.svg" width="35" />
                  </div>

                  <number
                    v-view.once="onceHandler"
                    animationPaused
                    class="text-3xl"
                    style="color: #d18ef2"
                    ref="number2"
                    :from="100"
                    :to="10000"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                  <div>Impressions delivered</div>
                </div>
              </div>
            </div>

            <div class="floating2">
              <div
                style="
                  background: #c6e6fd;
                  box-shadow: 5px 15px 20px rgba(178, 232, 255, 0.3);
                "
                class="p-3 rounded-2xl w-full shadow-xl"
              >
                <div class="grid place-items-center py-10 space-y-4">
                  <div>
                    <img src="/img/buy.svg" width="35" />
                  </div>

                  <number
                    v-view.once="onceHandler"
                    animationPaused
                    class="text-3xl"
                    style="color: #47b2ff"
                    ref="number3"
                    :from="100"
                    :to="10000"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                  <div>Impressions delivered</div>
                </div>
              </div>
            </div>

            <div class="floating">
              <div
                style="
                  background: #00438b;
                  box-shadow: 5px 15px 20px rgba(178, 232, 255, 0.3);
                "
                class="p-3 rounded-2xl w-full shadow-xl"
              >
                <div class="grid place-items-center py-10 space-y-4">
                  <div>
                    <img src="/img/buy.svg" width="35" />
                  </div>
                  <number
                    v-view.once="onceHandler"
                    animationPaused
                    class="text-3xl text-white"
                    ref="number4"
                    :from="100"
                    :to="10000"
                    :format="theFormat"
                    :duration="5"
                    :delay="2"
                    easing="Power1.easeOut"
                  />
                  <!-- <div>100000</div> -->
                  <div class="text-lg text-white">Impressions delivered</div>
                </div>
              </div>
            </div>

            <!-- <div class="floating2">
            <div
              style="
                background: #efdff7;
                box-shadow: 5px 15px 20px rgba(128, 0, 128, 0.3);
              "
              class="p-3 rounded-2xl w-full shadow-xl"
            >
              <h1 class="text-xl font-bold txt-purple">Jump back in!</h1>
              <div class="mt-4 mb-10">
                <p class="txt-purple">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div
                    class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"
                  ></div>
                </div>
              </div>
              <div class="mt-4 mb-10">
                <p class="text-white boxText">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div class="bg-white w-3/4 h-full rounded-lg shadow-md"></div>
                </div>
              </div>
              <h3 class="text-xs uppercase txt-purple">Current lesson:</h3>
            </div>
          </div>
          <div class="floating2">
            <div
              style="
                background: #efdff7;
                box-shadow: 5px 15px 20px rgba(128, 0, 128, 0.3);
              "
              class="p-3 rounded-2xl w-full shadow-xl"
            >
              <h1 class="text-xl font-bold txt-purple">Jump back in!</h1>
              <div class="mt-4 mb-10">
                <p class="txt-purple">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div
                    class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"
                  ></div>
                </div>
              </div>
              <div class="mt-4 mb-10">
                <p class="text-white boxText">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div class="bg-white w-3/4 h-full rounded-lg shadow-md"></div>
                </div>
              </div>
              <h3 class="text-xs uppercase txt-purple">Current lesson:</h3>
            </div>
          </div>
          <div class="floating2">
            <div
              style="
                background: #efdff7;
                box-shadow: 5px 15px 20px rgba(128, 0, 128, 0.3);
              "
              class="p-3 rounded-2xl w-full shadow-xl"
            >
              <h1 class="text-xl font-bold txt-purple">Jump back in!</h1>
              <div class="mt-4 mb-10">
                <p class="txt-purple">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div
                    class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"
                  ></div>
                </div>
              </div>
              <div class="mt-4 mb-10">
                <p class="text-white boxText">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div class="bg-white w-3/4 h-full rounded-lg shadow-md"></div>
                </div>
              </div>
              <h3 class="text-xs uppercase txt-purple">Current lesson:</h3>
            </div>
          </div> -->
          </div>
        </div>
      </div>

      <!-- <section class="text-gray-600 body-font">
      <div
        class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
      >
        <div
          class="lg:flex-grow md:w-1/2 lg:pr-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        >
          <h1 class="title-font text-5xl mb-4 font-medium text-gray-900">
            Who are we?
          </h1>
          <p class="text-lg text-gray-500 mb-4 mb-8 leading-relaxed">
            Adsrevenue is an interactive Digital Consulting Agency based in mumbai
            providing an exclusive service in Digital Marketing also Rated as
            one of the fastest growing affiliated network in India. we are a
            team of experienced digital marketers. We are specialist in high
            quality analysis to drive every aspect of your brandâ€™s
            marketingâ€“planning, technology & creative content. Now a days
            Internet marketing leading an important role in every business. We
            are dedicated to improving the user-advertising experience by
            implementing high standards for ad and content quality, and working
            with industry bodies to develop standards and guidelines Adsrevenue is
            the most trusted performance marketing partner for advertisers
            Beacause our ideology is to work as business partners for better ROI
            rather than just being the delivery partners. We believe in building
            healthier, benificial customer relationship with our aim to deliver
            peak performance. The Digital Edge! We believe in delivering
            performance, transparently and innovatively.
          </p>
          <div class="flex justify-center">
            <div class="flex -m-4">
              <div class="p-4 md:w-2/2 w-full">
                <div class="flex">
                  <div
                    style="background-color: #c6e6fd"
                    class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    <svg
                      class="w-6 h-6"
                      style="color: #63b0e3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-semibold ml-4">Increase</h4>
                </div>
                <p class="pt-4 md:w-2/2 w-full font-semibold">
                  We create your presence. Build credibility and trust.
                </p>
                <button
                  style="background: #ff8657"
                  class="mt-10 hidden md:block lg:block inline-flex text-white font-semibold border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Our Offering
                </button>
              </div>
              <div class="p-4 md:w-2/2 w-full">
                <div class="flex">
                  <div
                    style="background-color: #efe3e3"
                    class="ml-4 inline-flex text-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                  >
                    <svg
                      class="w-6 h-6"
                      style="color: #ed7265"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h4 class="text-2xl font-semibold ml-4">Brand</h4>
                </div>
                <p class="p-4 md:w-2/2 w-full font-semibold">
                  We create your presence. Build credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:max-w-lg lg:w-full md:w-1/2 w-full hidden md:block lg:block"
        >
          <div class="flex">
            <div style="background: #ff8657" class="p-3 rounded-2xl shadow-xl">
              <h1 class="text-xl font-bold text-white">Jump back in!</h1>
              <div class="mt-4 mb-10">
                <p class="text-white">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div class="bg-white w-3/4 h-full rounded-lg shadow-md"></div>
                </div>
              </div>
              <h3 class="text-xs uppercase text-white">Current lesson:</h3>
              <h2 class="tracking-wide text-white">
                Object in JavaScript
                <br />
                (Challenge)
              </h2>
              <button
                class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm text-white font-semibold hover:bg-opacity-75"
              >
                Go to lesson
              </button>
            </div>
            <div
              style="background: #efdff7"
              class="p-3 rounded-2xl shadow-xl ml-6"
            >
              <h1 class="text-xl font-bold txt-purple">Jump back in!</h1>
              <div class="mt-4 mb-10">
                <p class="txt-purple">Course 75% completed</p>
                <div
                  class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden"
                >
                  <div
                    class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"
                  ></div>
                </div>
              </div>
              <h3 class="text-xs uppercase txt-purple">Current lesson:</h3>
              <h2 class="tracking-wide txt-purple">
                Object in JavaScript
                <br />
                (Challenge)
              </h2>
              <button
                class="text-white bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
              >
                Go to lesson
              </button>
            </div>
          </div>
        </div>
        <button
          style="background: #ff8657"
          class="md:hidden lg:hidden flex mx-auto mt-0 text-white font-semibold border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Our Offering
        </button>
        <div class="flex-column mt-6 md:hidden lg:hidden">
          <div style="background: #ff8657" class="p-3 rounded-2xl shadow-xl">
            <h1 class="text-xl font-bold text-white">Jump back in!</h1>
            <div class="mt-4 mb-10">
              <p class="text-white">Course 75% completed</p>
              <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                <div class="bg-white w-3/4 h-full rounded-lg shadow-md"></div>
              </div>
            </div>
            <h3 class="text-xs uppercase text-white">Current lesson:</h3>
            <h2 class="tracking-wide text-white">
              Object in JavaScript
              <br />
              (Challenge)
            </h2>
            <button
              class="bg-orange-400 py-3 px-8 mt-4 rounded text-sm text-white font-semibold hover:bg-opacity-75"
            >
              Go to lesson
            </button>
          </div>
          <div
            style="background: #efdff7"
            class="p-3 rounded-2xl shadow-xl mt-4"
          >
            <h1 class="text-xl font-bold txt-purple">Jump back in!</h1>
            <div class="mt-4 mb-10">
              <p class="txt-purple">Course 75% completed</p>
              <div class="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
                <div
                  class="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"
                ></div>
              </div>
            </div>
            <h3 class="text-xs uppercase txt-purple">Current lesson:</h3>
            <h2 class="tracking-wide txt-purple">
              Object in JavaScript
              <br />
              (Challenge)
            </h2>
            <button
              class="text-white bg-orange-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75"
            >
              Go to lesson
            </button>
          </div>
        </div>
      </div>
    </section> -->
    </div>
    <!-- Mobile -->
    <section
      class="md:hidden lg:hidden text-gray-600 body-font overflow-hidden"
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">
              Who we are ?
            </h1>
            <p class="leading-relaxed mb-4">
              Adsrevenue is an interactive Digital Consulting Agency based in
              mumbai providing an exclusive service in Digital Marketing also
              Rated as one of the fastest growing affiliated network in India.
              We are specialist in high quality analysis to drive every aspect
              of your brands, marketing, planning, technology & creative
              content. Adsrevenue is the most trusted performance marketing
              partner for advertisers Beacause our ideology is to work as
              business partners for better ROI rather than just being the
              delivery partners.The Digital Edge! We believe in delivering
              performance, transparently and innovatively.
            </p>
          </div>
          <div class="p-0 md:w-2/2 w-full">
            <div class="flex">
              <div
                style="background-color: #e8f4fe"
                class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <svg
                  class="w-6 h-6"
                  style="color: #ed7265"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </div>
              <h4 class="text-2xl text-gray-700 font-semibold ml-4">
                Increase
              </h4>
            </div>
            <p class="pt-4 md:w-2/2 w-full text-gray-500 font-semibold">
              We create your presence. Build credibility and trust.
            </p>
            <!-- <button
                  style="background: #ff8657"
                  class="mt-10 hidden md:block hover:bg-gray-900 lg:block inline-flex text-white font-semibold border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Our Offering
                </button> -->
          </div>
          <div class="p-0 md:w-2/2 w-full">
            <div class="flex">
              <div
                style="background-color: #e8f4fe"
                class="inline-flex text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                <svg
                  class="w-6 h-6"
                  style="color: #ed7265"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h4 class="text-2xl text-gray-700 font-semibold ml-4">Brand</h4>
            </div>
            <p class="pt-4 md:w-2/2 w-full text-gray-500 font-semibold">
              We create your presence. Build credibility.
            </p>
          </div>
          <div>
            <div class="flex flex-wrap -m-4 text-center mt-8">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg floating2-mobile shadow-lg" style="background:#ff8657;">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path
                      d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"
                    ></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">
                    2.7K
                  </h2>
                  <p class="leading-relaxed text-white">Downloads</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg floating2-mobile" style="background:#efdff7;">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path
                      d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                    ></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">
                    1.3K
                  </h2>
                  <p class="leading-relaxed text-white">Users</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg floating2-mobile" style="background:#c6e6fd;">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path
                      d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"
                    ></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">
                    74
                  </h2>
                  <p class="leading-relaxed text-white">Files</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="px-4 py-6 rounded-lg floating2-mobile" style="background: #00438b;">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    ></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">
                    46
                  </h2>
                  <p class="leading-relaxed text-white">Places</p>
                </div>
              </div>
            </div>
          </div>
          <!-- <div>
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "About",
  methods: {
    onceHandler(e) {
      console.log("called");
      this.$refs.number1.play();
      this.$refs.number2.play();
      this.$refs.number3.play();
      this.$refs.number4.play();
    },
  },
};
</script>
<style scoped>
.inner {
  display: inline-block;
  width: 100%;
  height: 65%;
}
.txt-purple {
  color: rgb(177, 124, 198);
}

.floating {
  animation-name: floating;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}
.floating2 {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  margin-left: 30px;
  margin-top: 5px;
}
.floating2-mobile {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes floating {
  from {
    transform: translate(0, 0px);
  }
  65% {
    transform: translate(0, 25px);
  }
  to {
    transform: translate(0, -0px);
  }
}
.boxText {
  color: #5ebcfe;
}
</style>