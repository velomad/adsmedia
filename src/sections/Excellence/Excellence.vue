<template>
  <div
    class="flex h-screen justify-center items-center"
    style="background: url(/img/leaves-pattern.png)"
  >
    <div class="element">
      <div
        style="text-shadow: 3px 4px #ccc"
        class="text-center text-gray-600 text-5xl capitalize"
      >
        Excellence Skills
      </div>

      <div
        class="space-y-8 md:grid grid-cols-2 gap-6 px-4"
        v-view.once="onceHandler"
      >
        <div v-for="(item, index) in bars" :key="index" class="mt-8">
          <div class="py-2 text-lg text-gray-600 capitalize">
            {{ item.name }}
          </div>
          <div class="bg-gray-300 rounded-md">
            <div
              :style="
                'box-shadow: 5px 15px 20px rgba(' +
                item.rgba +
                ', 0.5); width: 20px'
              "
              :class="[
                item.color === 'gray'
                  ? 'bg-' + item.color + '-600 h-6 rounded-md'
                  : 'bg-' + item.color + '-400 h-6 rounded-md',
              ]"
              :ref="item.name"
            ></div>
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
          color: "pink",
          rgba: "255,182,193",
          percent: "80%",
        },
        {
          name: "web design and developement",
          percent: "85%",
          rgba: "34,139,34",
          color: "green",
        },
        {
          name: "search engine marketing",
          percent: "50%",
          rgba: "178, 232, 255",

          color: "blue",
        },
        {
          name: "media buying & planning",
          percent: "80%",
          rgba: "255,255,0",

          color: "yellow",
        },
        {
          name: "whatsapp marketing",
          percent: "60%",
          rgba: "128,0,128",

          color: "purple",
        },
        {
          name: "social media and orm",
          percent: "65%",
          color: "gray",
          rgba: "104,104,104",
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
      }, 700);
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
  height: 50vh;
  margin: 0 auto;
}
</style>