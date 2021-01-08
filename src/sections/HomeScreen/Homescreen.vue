<template>
  <div>
    <div class="z-20 fixed w-full top-0">
    <Navbar />
    </div>
    <!-- component -->
    <div class="w-full  h-screen relative mt-36">
      <div class="absolute w-full h-full z-10">
        <div class="px-16 h-full flex items-center justify-start">
          <div class="hidden lg:flex flex-col w-full space-y-4 py-12">
            <!-- <img
              class="w-40 h-40"
              src="/img/logo1.png"
              alt=""
            /> -->
            <h3 class="text-6xl font-semibold text-white">
              We are
              <span
                style="font-family: Merriweather"
                class="rainbow rainbow_text_animated text-3xl"
                >Adsrevenue</span
              >
            </h3>
            <p class="text-3xl text-white">DIGITAL CONSULTING AGENCY</p>
            <!-- <b class="text-4xl text-white text-left">
              <span class="text-eff">
                web developer<br />
                css cowboy<br />
                self-facilitating media node<br />
                box inside a box<br />
                part of the problem
              </span>
            </b> -->
            <div class="w-96">
              <div class="container-text border-stick">
                <div class="v-slider-frame">
                  <ul class="v-slides">
                    <li class="v-slide text-left font-bold">TRUSTED</li>
                    <li class="v-slide text-left font-bold">RELIABLE</li>
                    <li class="v-slide text-left font-bold">RESPONSIBLE</li>
                    <li class="v-slide text-left font-bold">EXPERIENCED</li>
                    <li class="v-slide text-left font-bold">EFFICIENT</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex space-x-4 flex-row w-full">
              <a href="https://adsmidea.offer18.com/m/login" target="_blank">
                <button
                  class="px-3 mt-5 items-center shadow-md bg-white space-x-2 py-2 justify-center flex w-32 rounded-lg hover:bg-gray-500 hover:text-white hover:bg-opacity-50 parent-login-btn"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="text-gray-800 font-semibold home-login-btn"
                    >Login</span
                  >
                </button>
              </a>
              <button
              v-scroll-to="'#contact'"
                class="px-3 mt-5 items-center shadow-md rounded-lg bg-gray-500 bg-opacity-50 space-x-2 py-2 justify-center flex w-auto hover:bg-white parent-cont-btn"
              >
                <svg
                  class="w-6 h-6 text-white cont-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span class="text-white font-semibold home-cont-btn"
                  >Contact Us</span
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black"
      ></div>
      <video
        class="w-full h-64 lg:h-screen object-cover -mt-8"
        autoplay
        muted
        loop
      >
        <source
          class="h-screen object-contain"
          src="/img/HomeBackG.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>
<script>
// import $ from 'jquery';
import Navbar from "../../components/Navbar/Navbar.vue";
export default {
  name: "Home",
  components: { Navbar },
  mounted() {
    //text effect
    var vsOpts = {
      $slides: $(".v-slide"),
      $list: $(".v-slides"),
      duration: 14,
      lineHeight: 50,
    };

    var vSlide = new TimelineMax({
      paused: true,
      repeat: -1,
    });

    vsOpts.$slides.each(function (i) {
      vSlide.to(vsOpts.$list, vsOpts.duration / vsOpts.$slides.length, {
        y: i * -1 * vsOpts.lineHeight,
        ease: Elastic.easeOut.config(1.5, 4),
      });
    });
    vSlide.play();
  },
};
</script>
<style scoped>
.rainbow {
  font-size: 5vw;
  text-align: center;
  text-decoration: underline;
  font-family: "MuseoModerno";
  letter-spacing: 5px;
}
.rainbow_text_animated {
  background: linear-gradient(
    to right,
    #fff,
    #fff,
    #fff,
    #fff,
    #6666ff,
    #0099ff,
    #00ff00,
    #ff3399,
    #6666ff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;
}
p {
  height: 50px;
  float: left;
  margin-right: 0.3em;
}
b {
  float: left;
  overflow: hidden;
  position: relative;
  height: 50px;
}
.text-eff {
  display: inline-block;
  color: #5ebcfe;
  position: relative;
  white-space: nowrap;
  top: 0;
  left: 0;
  animation: move 5s;
  animation-iteration-count: infinite;
  animation-delay: 1s;
}
.v-slider-frame {
  height: 50px;
  overflow: hidden;
  text-align: center;
}

ul.v-slides {
  list-style-type: none;
  -webkit-transform: translateY(50px);
  transform: translateY(50px);
  padding: 0;
}

.v-slide {
  font-size: 4vw;
  line-height: 50px;
  color: rgb(16, 154, 209);
}

.border-stick {
  margin: 0;
  padding-bottom: 7px;
  position: relative;
  border-bottom: 4px solid #ccc;
}

.border-stick:before {
  position: absolute;
  background: greenyellow;
  height: 4px;
  content: "";
  width: 150px;
  bottom: -4px;
  left: 0;
}
.parent-login-btn:hover > .home-login-btn {
  color: #fff;
}
.parent-cont-btn:hover > .home-cont-btn {
  color: #000 !important;
}
.parent-cont-btn:hover > .cont-icon {
  color: #000 !important;
}
@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@keyframes rainbow_animation {
  0%,
  100% {
    background-position: 0 0;
  }

  50% {
    background-position: 100% 0;
  }
}
</style>