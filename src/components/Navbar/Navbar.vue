<template>
  <div id="nav">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div class="relative flex items-center justify-between h-28">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              @click="toggleSideNav()"
              class="z-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          -->
              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          -->
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:block w-60 h-10"
                src="/img/final-logo.png"
                alt="Workflow"
              />
              <!-- <div>
                <h4 class="text-4xl font-bold text-gray-600 font-mono">
                  Adsrevenue
                </h4>
                <p
                  class="uppercase text-xs tracking-widest text-center text-gray-400"
                >
                  Digital Marketing
                </p>
              </div> -->

              <!-- <img
                class="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              /> -->
            </div>
          </div>
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <div class="ml-3 relative mt-4">
              <nav
                class="invisible md:visible flex space-x-2 items-center shift"
              >
                <ul
                  class="flex uppercase font-semibold text-sm tracking-widest text-center text-gray-600 space-x-2"
                >
                  <router-link to="/" tag="button">
                    <li class="uppercase font-semibold">
                      <a class="p-3" v-scroll-to="'#home'" href="#">Home</a>
                    </li>
                  </router-link>
                  <li>
                    <a class="p-3" v-scroll-to="'#about-section'" href="#"
                      >About</a
                    >
                  </li>
                  <li>
                    <a class="p-3" v-scroll-to="'#services'" href="#"
                      >Services</a
                    >
                  </li>
                  <li>
                    <a class="p-3" v-scroll-to="'#why-we'" href="#">Why We ?</a>
                  </li>
                  <li><a class="p-3" href="#">Affiliate</a></li>
                  <li><a class="p-3" href="#">Advertiser</a></li>
                  <li>
                    <a class="p-3" v-scroll-to="'#contact'" href="#">Contact</a>
                  </li>
                  <li>
                    <router-link to="/blogs">
                      <a class="p-3">Blog</a>
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
      <div
        v-show="toggleNavbar"
        style="z-index: 99999"
        class="transition duration-1000 ease-in-out"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="text-gray-500 block px-3 py-2 rounded-md text-base font-medium"
            >Home</a
          >
          <a
            @click="toggleNavbar = !toggleNavbar"
            href="#"
            v-scroll-to="'#about-section'"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >About</a
          >
          <a
            @click="toggleNavbar = !toggleNavbar"
            href="#"
            v-scroll-to="'#services'"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Services</a
          >
          <a
            @click="toggleNavbar = !toggleNavbar"
            href="#"
            v-scroll-to="'#why-we'"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Why We ?</a
          >
          <a
            href="#"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Affiliate</a
          >
          <a
            href="#"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Advertiser</a
          >
          <a
            href="#"
            v-scroll-to="'#contact'"
            class="border-t text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Contact</a
          >
        </div>
      </div>
    </nav>
    <div class="progress-container">
      <div class="progress-bar" id="headerBar"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggleDropDown: false,
      toggleNavbar: false,
    };
  },
  methods: {
    toggleSideNav() {
      this.toggleNavbar = !this.toggleNavbar;
    },
    ScrollIndicator() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("headerBar").style.width = scrolled + "%";
      console.log(Math.round(scrolled * 100) / 100);
    },
  },
  created() {
    window.addEventListener("scroll", this.ScrollIndicator);
  },
  destroyed() {
    window.removeEventListener("scroll", this.ScrollIndicator);
  },
};
</script>
<style scoped>
nav.shift ul li a {
  position: relative;
  z-index: 1;
}
nav.shift ul li a:hover {
  color: #fff;
}
nav.shift ul li a:after {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 1px;
  border-radius: 10px;
  content: ".";
  color: transparent;
  background: linear-gradient(90deg, #ff8657 0%, #ff3225 140%);
  visibility: none;
  opacity: 0;
  z-index: -1;
}
nav.shift ul li a:hover:after {
  opacity: 1;
  visibility: visible;
  height: 100%;
}

.progress-container {
  width: 100%;
  height: 4px;
  background: #fff;
}

.progress-bar {
  height: 4px;
  background: linear-gradient(90deg, #ff8657 0%, #ff3225 100%);
  width: 0%;
}

/* nav ul li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 10px;
} */
nav ul li a,
nav ul li a:after,
nav ul li a:before {
  transition: all 0.5s;
}
nav ul li a:hover {
  color: #fff;
}

/* stroke */
nav.stroke ul li a,
nav.fill ul li a {
  position: relative;
}
nav.stroke ul li a:after,
nav.fill ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: #aaa;
  height: 1px;
}
nav.stroke ul li a:hover:after {
  width: 100%;
}

nav.fill ul li a {
  transition: all 2s;
}

nav.fill ul li a:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}
nav.fill ul li a:hover {
  color: #fff;
  z-index: 1;
}
nav.fill ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  -webkit-animation: fill 1s forwards;
  -moz-animation: fill 1s forwards;
  opacity: 1;
}
</style>
