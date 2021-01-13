<template>
  <div id="WorkingProcess">
    <div class="hidden md:block lg:block">
      <div
        class="custom-img flex bg-gray-300 h-screen bg-fixed justify-center items-center"
      >
        <div class="space-y-24">
          <div class="text-white text-center font-semibold mt-4 text-4xl">
            Working Process <br />
            <p class="text-sm font-medium text-white mt-2">
              Interactive Digital Consulting Agency.
            </p>
          </div>
          <div></div>
          <div class="flex space-x-32">
            <div class="space-y-4" v-scroll-reveal.reset="{ delay: 150 }">
              <div
                class="w-36 h-36 rounded-full wrapper ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  we understand the complete requirement before execution
                </div>
                <div
                  class="p-0 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/work-user.png" alt="" class="w-32" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                Meetings
              </div>
            </div>
            <div class="space-y-4" v-scroll-reveal.reset="{ delay: 250 }">
              <div
                class="w-36 h-36 rounded-full ring-1 wrapper ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  planning is always done keeping the end goal in mind and plan
                  B in place
                </div>
                <div
                  class="p-10 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/diagram.svg" alt="" width="50" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                plannings
              </div>
            </div>
            <div class="space-y-4" v-scroll-reveal.reset="{ delay: 350 }">
              <div
                class="w-36 h-36 wrapper rounded-full ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  keeping a close eye on execution help us optimize the campaign
                  at every stage
                </div>

                <div
                  class="p-6 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/paper-plane.png" alt="" class="w-20" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                executions
              </div>
            </div>
            <div class="space-y-4" v-scroll-reveal.reset="{ delay: 450 }">
              <div
                class="w-36 wrapper h-36 rounded-full ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  we believe in customer delight and make sure the execution is
                  error free
                </div>

                <div
                  class="p-6 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/magic-wand.png" alt="" class="w-20" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                results
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile -->
    <section
      class="md:hidden lg:hidden custom-img bg-fixed text-gray-600 body-font"
    >
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1
            class="text-4xl font-medium title-font mb-4 text-white tracking-widest"
          >
            Working Process
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-white">
            Interactive Digital Consulting Agency.
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="p-4 lg:w-1/2 w-full">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <div
                class="w-36 h-36 rounded-full wrapper ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  we understand the complete requirement before execution
                </div>
                <div
                  class="p-10 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/user.svg" alt="" width="50" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                Meetings
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <div
                class="w-36 h-36 rounded-full ring-1 wrapper ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  planning is always done keeping the end goal in mind and plan
                  B in place
                </div>
                <div
                  class="p-10 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/diagram.svg" alt="" width="50" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                plannings
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <div
                class="w-36 h-36 wrapper rounded-full ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  keeping a close eye on execution help us optimize the campaign
                  at every stage
                </div>

                <div
                  class="p-10 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/aerodynamic.svg" alt="" width="50" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                Executions
              </div>
            </div>
          </div>
          <div class="p-4 lg:w-1/2 w-full">
            <div
              class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left"
            >
              <div
                class="w-36 wrapper h-36 rounded-full ring-1 ring-gray-100 flex justify-center items-center"
              >
                <div class="tooltip">
                  we believe in customer delight and make sure the execution is
                  error free
                </div>

                <div
                  class="p-10 rounded-full bg-gray-200 hover:bg-transparent transition ease-in-out duration-500"
                >
                  <img src="/img/magic-wand.svg" alt="" width="50" />
                </div>
              </div>
              <div
                class="text-center text-white tracking-wider text-2xl font-semibold uppercase"
              >
                Results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "WorkingProcess",
};
</script>
<style scoped>
.custom-img {
  background-image: url("/img/workingprocess.jpg");
  object-fit: contain;
}
.wrapper {
  /* text-transform: uppercase;
  background: #ececec;
  color: #555;
  cursor: help;
  font-family: "Gill Sans", Impact, sans-serif;
  font-size: 20px;
  margin: 100px 75px 10px 75px;
  padding: 15px 20px;
  position: relative;
  text-align: center;
  width: 200px; */
  -webkit-transform: translateZ(0); /* webkit flicker fix */
  -webkit-font-smoothing: antialiased; /* webkit text rendering fix */
}

.wrapper .tooltip {
  background: linear-gradient(90deg, #ff8657 0%, #ff3225 140%);
  bottom: 100%;
  border-radius: 6px;
  color: #fff;
  display: block;
  margin-bottom: 15px;
  opacity: 0;
  padding: 20px;
  pointer-events: none;
  position: absolute;
  width: 250px;
  -webkit-transform: translateY(10px);
  -moz-transform: translateY(10px);
  -ms-transform: translateY(10px);
  -o-transform: translateY(10px);
  transform: translateY(10px);
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -ms-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
  -webkit-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -moz-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);
}

/* This bridges the gap so you can mouse into the tooltip without it disappearing */
.wrapper .tooltip:before {
  bottom: -20px;
  content: " ";
  display: block;
  height: 20px;
  left: 0;
  position: absolute;
  width: 100%;
}

/* CSS Triangles - see Trevor's post */
.wrapper .tooltip:after {
  border-left: solid transparent 10px;
  border-right: solid transparent 10px;
  border-top: solid #ff8657 10px;
  bottom: -10px;
  content: " ";
  height: 0;
  left: 50%;
  margin-left: -13px;
  position: absolute;
  width: 0;
}

.wrapper:hover .tooltip {
  opacity: 1;
  pointer-events: auto;
  -webkit-transform: translateY(0px);
  -moz-transform: translateY(0px);
  -ms-transform: translateY(0px);
  -o-transform: translateY(0px);
  transform: translateY(0px);
}

/* IE can just show/hide with no transition */
.lte8 .wrapper .tooltip {
  display: none;
}

.lte8 .wrapper:hover .tooltip {
  display: block;
}
</style>
