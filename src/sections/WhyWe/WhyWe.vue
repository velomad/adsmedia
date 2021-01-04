<template>
  <carousel
  class="py-10"
    style="background-color:#e8f4fe"
    :perPage="1"
    :autoplay="true"
    :autoplayHoverPause="true"
    :autoplayTimeout="3000"
    :loop="true"
  >
    <slide class="space-y-6">
      <div class="text-center text-xl text-gray-700">
        Convert traffic into sales
      </div>
      <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
        <div>
          <img src="@/assets/slider.svg" alt="" width="300" />
        </div>
        <div class="text-center col-span-2  text-gray-500">
          Convert traffic into sales- Where we use search engines to market your
          product; via paid methods (Pay per Click (PPC) Services).
        </div>
      </div>
    </slide>
    <slide class="space-y-6">
      <div class="text-center text-xl text-gray-700">We Give Results</div>
      <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
        <div>
          <img src="@/assets/slider3.svg" alt="" width="300" />
        </div>
        <div class="text-center col-span-2 text-gray-500">
          We will come up with a flexible and result oriented business
          strategies to help you achieve your business goals.
        </div>
      </div>
    </slide>
    <slide class="space-y-6">
      <div class="text-center text-xl text-gray-700">Our creative Support</div>
      <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
        <div>
          <img src="@/assets/slider2.svg" alt="" width="300" />
        </div>
        <div class="text-center text-gray-500 col-span-2">
          Adsmidea has a team of creative support digital marketing experts
          having their own unique specialties. Create appealing banners, landing
          pages and content that Affiliates can use to boost their campaigns.
        </div>
      </div>
    </slide>
  </carousel>
</template>
<script>
export default {
  name: "whywe",
  components: {},
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>
<style scoped>
</style>