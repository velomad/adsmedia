<template>
  <!-- <div
    class="shadow-md space-y-8 content-center hover:shadow-xl cursor-pointer transition duration-500 ease-in-out p-6 rounded-lg"
  >
    <img src="@/assets/hammer.svg" width="50" class="mx-auto" />
    <div class="text-center">
      {{ heading }}
    </div>
    <div class="text-center heading">
      {{ content }}
    </div>
  </div> -->

  <div
    style="box-shadow: 0 15px 20px rgba(4, 112, 184, 0.1)"
    class="hover w-full mt-24 md:mt-8 lg:mt-8 mx-auto rounded-lg hover:shadow-2xl cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 bg-white shadow-lg h-80 px-5 text-gray-800"
  >
    <div class="w-full pt-5">
      <div
        class="overflow-hidden ring-indigo-300 ring-2 rounded-full bg-white w-20 h-20 -mt-16 mx-auto shadow-lg"
      >
        <img
          :src="'/img/' + icon"
          width="50"
          alt=""
          class="object-contain mx-auto mt-4"
        />
      </div>
    </div>
    <div class="py-6 space-y-6">
      <div class="w-full">
        <p
          style=""
          class="text-md font-bold text-center transition duration-100 ease-in-out transform hover:-translate-y-2 hover:scale-110 content"
        >
          {{ heading }}
        </p>
      </div>
      <p class="text-sm text-justify px-0 content md:px-5 lg:px-5">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: ["heading", "content", "icon"],
};
</script>

<style scoped>
.heading {
  position: relative;
  text-decoration: none;
  display: inline-block;
  color: black;
  padding: 0 2px;
  transition: color ease 0.3s;
}

.heading::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 0%;
  border-radius: 5px;
  left: 0;
  bottom: 0;
  /* background: rgb(0, 0, 0, 0.7); */
  background-color: #ff8453;
  transition: all ease 0.3s;
}

.heading:hover {
  color: white;
}

.heading:hover::after {
  height: 100%;
}

.hover:hover {
  background: linear-gradient(90deg,#ff8657 0%,#ff3225 140%);
  color: white;
}

.hover:hover > .content {
  color: white;
}
</style>