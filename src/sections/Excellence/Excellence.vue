<template>
  <!-- <div
    class="flex h-screen justify-center items-center"
    style="background: url(/img/e.jpg); background-size: cover;"
  > -->

  <div
    id="ExcellenceSkills"
    class=" w-full bg-cover h-screen  bg-center bg-fixed"
    style="background-image: url(/img/e.jpg)"
  >
    <div
      class="flex py-6 md:items-center lg:items-center md:justify-center lg:justify-center h-full w-full bg-gray-900 bg-opacity-70"
    >
      <div class="element">
        <div
          class="text-center text-gray-100 font-semibold text-4xl capitalize"
        >
          Excellence Skills
        </div>
        <div
          class="space-y-8 md:grid grid-cols-2 gap-6 px-4"
          v-view.once="onceHandler"
        >
          <div v-for="(item, index) in bars" :key="index" class="mt-8">
            <div class="py-2 text-lg text-gray-100 capitalize">
              {{ item.name }}
            </div>
            <div class="bg-gray-300 rounded-md">
              <div
                
                :class="[
                  item.color === 'gray'
                    ? 'bg-' + item.color + '-600 h-4 rounded-md'
                    : 'bg-' + item.color + '-500 h-4 rounded-md',
                ]"
                style="background: linear-gradient(90deg, #ff8657 0%, #ff3225 80%);"
                :ref="item.name"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { grow } from "./skillbar";

export default {
  name: "skills",
  data() {
    return {
      bars: [
        {
          name: "affiliate marketing",
          color: "red",
          rgba: "255,0,0",
          percent: "80%",
        },
        {
          name: "web design and developement",
          percent: "85%",
          rgba: "255,0,0",

          color: "red",
        },
        {
          name: "search engine marketing",
          percent: "50%",

          rgba: "255,0,0",

          color: "red",
        },
        {
          name: "media buying & planning",
          percent: "80%",
          rgba: "255,0,0",

          color: "red",
        },
        {
          name: "whatsapp marketing",
          percent: "60%",
          rgba: "255,0,0",

          color: "red",
        },
        {
          name: "social media and orm",
          percent: "65%",
          color: "red",
          rgba: "255,0,0",
        },
      ],
    };
  },
  methods: {
    onceHandler(e) {
      setTimeout(() => {
        this.bars.map((el) => {
          grow(this.$refs[el.name], el.percent);
        });
      }, 800);
    },
  },
  mounted() {},
};
</script>
<style scoped>
.container-1 {
  display: grid;
  align-items: center;
  justify-content: center;
}

/* just aesthetics */
.container-1 {
  width: 100%;
  height: 100vh;
  margin: auto;
}

.element {
  width: 90vw;
  height: 70vh;
  margin: 0 auto;
}
</style>