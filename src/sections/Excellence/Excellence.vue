<template>
  <div
    class="space-y-8 md:grid grid-cols-2 gap-6 px-4"
    v-view.once="onceHandler"
  >
    <div v-for="(item, index) in bars" :key="index" class="mt-8">
      <div class="py-2 text-sm capitalize">{{ item.name }}</div>
      <div class="bg-gray-300 rounded-md">
        <div
          :class="[
            item.color === 'gray'
              ? 'bg-' + item.color + '-600 h-5 rounded-md'
              : 'bg-' + item.color + '-400 h-5 rounded-md',
          ]"
          :ref="item.name"
          style="width: 20px"
        ></div>
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
          percent: "80%",
        },
        {
          name: "web design and developement",
          percent: "85%",
          color: "green",
        },
        {
          name: "search engine marketing",
          percent: "50%",
          color: "blue",
        },
        {
          name: "media buying & planning",
          percent: "80%",
          color: "yellow",
        },
        {
          name: "whatsapp MARKETING",
          percent: "60%",
          color: "purple",
        },
        {
          name: "social media and orm",
          percent: "65%",
          color: "gray",
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