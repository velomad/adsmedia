<template>
  <div class="space-y-8 md:grid grid-cols-2 gap-6 px-4">
    <div v-for="(item, index) in bars" :key="index" class="mt-8">
      <div class="py-2">{{ item.name }}</div>
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
          name: "AFFILIATE MARKETING",
          color: "pink",
          percent: "60%",
        },
        {
          name: "STRATEGY AND CONSULTING",
          percent: "90%",
          color: "green",
        },
        {
          name: "SEARCH ENGINE MARKETING",
          percent: "85%",
          color: "blue",
        },
        {
          name: "MEDIA BUYING AND PLANNING",
          percent: "70%",
          color: "yellow",
        },
        {
          name: "MOBILE MARKETING",
          percent: "40%",
          color: "purple",
        },
        {
          name: "SOCIAL MEDIA AND ORM",
          percent: "99%",
          color: "gray",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.bars.map((el) => {
        grow(this.$refs[el.name], el.percent);
      });
    }, 1000);
  },
};
</script>