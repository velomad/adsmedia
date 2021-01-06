<template>
  <div>
    <!-- component -->
    <header>
      <div
        class="w-full bg-cover bg-center bg-fixed"
        style="height: 32rem; background-image: url(/img/work.jpg)"
      >
        <div
          class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-80"
        >
          <carousel
            class="py-10 inner"
            :perPage="1"
            :autoplay="true"
            :autoplayHoverPause="true"
            :autoplayTimeout="3000"
            :loop="true"
          >
            <slide class="space-y-6">
              <div class="text-center text-4xl text-white">
                Convert traffic into sales
              </div>
              <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
                <div>
                  <img src="@/assets/slider.svg" alt="" width="300" />
                </div>
                <div class="text-center text-2xl col-span-2 text-white">
                  Convert traffic into sales- Where we use search engines to
                  market your product; via paid methods (Pay per Click (PPC)
                  Services).
                </div>
              </div>
            </slide>
            <slide class="space-y-6">
              <div class="text-center text-4xl text-white">We Give Results</div>
              <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
                <div>
                  <img src="@/assets/slider3.svg" alt="" width="300" />
                </div>
                <div class="text-center text-2xl col-span-2 text-white">
                  We will come up with a flexible and result oriented business
                  strategies to help you achieve your business goals.
                </div>
              </div>
            </slide>
            <slide class="space-y-6">
              <div class="text-center text-4xl text-white">
                Our creative Support
              </div>
              <div class="grid grid-cols-3 place-items-center space-x-4 p-2">
                <div>
                  <img src="@/assets/slider2.svg" alt="" width="300" />
                </div>
                <div class="text-center text-2xl text-white col-span-2">
                  Adsmidea has a team of creative support digital marketing
                  experts having their own unique specialties. Create appealing
                  banners, landing pages and content that Affiliates can use to
                  boost their campaigns.
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
    </header>
  </div>
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