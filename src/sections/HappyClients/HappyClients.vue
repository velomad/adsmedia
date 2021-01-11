<template>
  <div
    class="md:block lg:block flex bg-gray-900 h-96 justify-center items-center"
    style="background: #FFF"
  >
    <div class="space-y-10 py-4 md:py-10 lg:py-10">
      <div class="flex-col space-y-4 text-center w-full">
        <h1 class="text-center text-gray-700 font-semibold text-3xl md:text-4xl capitalize">
          Our Happy Clients
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed tracking-widest text-gray-400 font-bold text-xs md:text-xs lg:text-xs"
        >
          THE UPSHOT OF ALL THE HARDWORK
        </p>
      </div>
      <div style="width: 95vw">
        <infinite-slide-bar duration="25s">
          <div class="flex justify-between items-center">
            <div v-for="items in Brands" :key="items.key">
              <img :src="'/img/' + items.icon" class="ml-32 w-28 md:w-36 lg:w-36" />
            </div>
          </div>
        </infinite-slide-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Brands: [
        {
          icon: "ICICI.png",
          key: 2,
        },
        {
          icon: "Flipkart.png",
          key: 3,
        },
        {
          icon: "HDFC.png",
          key: 4,
        },
        {
          icon: "Indusland.png",
          key: 5,
        },
        {
          icon: "PAYTM.png",
          key: 7,
        },
        {
          icon: "Snapdeal.png",
          key: 10,
        },
        {
          icon: "TimesInternet.png",
          key: 11,
        },
        {
          icon: "kotak bank logo.png",
          key: 6,
        },
        {
          icon: "sharekhan logo.png",
          key: 6,
        },
        {
          icon: "axis bank logo.png",
          key: 6,
        },
        {
          icon: "angel broking logo.png",
          key: 6,
        },
        {
          icon: "motilal oswal logo.png",
          key: 6,
        },
        {
          icon: "rbl bank logo.png",
          key: 6,
        }
      ],
    };
  },
};
</script>
<style scoped>
.scroll {
  overflow-x: hidden;
}
</style>