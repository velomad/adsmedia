<template>
  <div id="nav">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-28">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
              <!-- <img
                class="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              /> -->
              <div>
                <h4 class="text-4xl font-bold">Adsmedia</h4>
                <p>Digital Marketing</p>
              </div>

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
            <div class="ml-3 relative">
              <!-- <div>
                <button
                  @click="toggleDropDown = !toggleDropDown"
                  class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div> -->

              <nav class="flex space-x-4 items-center shift">
                <ul class="flex">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Why We ?</a></li>
                  <li><a href="#">Affiliate</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
                <a href="https://adsmidea.offer18.com/m/login" target="_blank">
                  <div
                    class="bg-gray-900 cursor-pointer p-2 rounded-lg text-white"
                  >
                    Login
                  </div>
                </a>
              </nav>

              <!-- <div class="hidden sm:block sm:ml-6">
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-black bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                    >Home</a
                  >
                  <a
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-sm text-xl font-medium"
                    >About</a
                  > -->
              <!-- <a
                    @click="toggleDropDown = !toggleDropDown"
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                  >
                    <div class="flex">
                      <p class="pr-2">Publisher</p>
                      <span
                        ><svg
                          style="width: 20px"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="{2}"
                            d="M19 9l-7 7-7-7"
                          /></svg
                      ></span>
                    </div>
                  </a> -->
              <!-- <a
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                    >Services</a
                  >
                  <a
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                    >Advertiser</a
                  >
                  <a
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                    >Affiliate</a
                  >
                  <a
                    href="#"
                    class="text-black hover:bg-gray-100 hover:text-black px-3 py-2 rounded-md text-xl font-medium"
                    >Contact</a
                  > -->
              <!-- <div
                    v-show="toggleDropDown"
                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Your Profile</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Settings</a
                    >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                      >Sign out</a
                    > -->
              <!-- </div> -->
              <!-- </div> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>

      <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  -->
      <div class="hidden sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <a
            href="#"
            class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            >Dashboard</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Team</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Projects</a
          >
          <a
            href="#"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >Calendar</a
          >
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      toggleDropDown: false,
    };
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
  background: #f57543;
  visibility: none;
  opacity: 0;
  z-index: -1;
}
nav.shift ul li a:hover:after {
  opacity: 1;
  visibility: visible;
  height: 100%;
}

nav ul li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: #555;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 10px;
}
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