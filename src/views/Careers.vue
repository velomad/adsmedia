<template>
  <div>
    <div class="z-20 fixed w-full top-0">
      <Navbar />
    </div>
    <div
      class="bg-cover bg-fixed"
      style="
          height: 100%;
          background-image: url(/img/emp.jpg);
        "
    >
      <section
        class="text-gray-600 px-5 py-44 space-y-8 mx-auto body-font bg-fixed bg-indigo-900 bg-opacity-75"
      >
        <div class="text-center text-white text-3xl">
          Our mission is to make world class marketing easy for everyone.
        </div>
        <div>
          <router-link to="/careers/jobs">
            <div
              style="background: linear-gradient(90deg, #ff8657 0%, #ff3225 100%);"
              class="rounded-lg cursor-pointer text-center mx-auto w-48 p-4 text-white text-2xl"
            >
              see open roles
            </div>
          </router-link>
        </div>
      </section>
    </div>
    <div class="py-20 space-y-20 px-10 md:px-20">
      <div class="text-center text-3xl text-gray-700">
        Our Mission
      </div>

      <div
        class="xs:grid grid-cols-1 space-y-10  md:grid grid-cols-2 place-items-center"
      >
        <div>
          <img src="/img/mission.svg" alt="" width="300" />
        </div>
        <div class="text-justify text-md text-gray-600">
          We’ve built an industry-leading visual marketing platform that helps
          over 700,000 brands and small businesses drive ROI on Pinterest and
          Instagram. Marketing & Analytics is just the beginning though. Content
          is a $50Bn industry that is becoming more visual by the day and we've
          only scratched the surface of tapping into these opportunities. Armed
          with data, we're building products that help make the industry
          smarter, more approachable and able to deliver a much more engaging
          experience to consumers.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar/Navbar";
export default {
  name: "Careers",
  components: {
    Navbar,
  },
};
</script>
<style scoped></style>
