<template>
  <div
    class="md:block lg:block flex bg-gray-900 h-96 justify-center items-center"
    style="background: url(/img/padded.png)"
  >
    <div class="space-y-10 py-4 md:py-10 lg:py-10">
      <div class="flex-col space-y-4 text-center w-full">
        <h1 class="text-center text-white text-3xl md:text-5xl lg:text-5xl capitalize">
          Our Happy Customers
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed tracking-widest text-gray-400 font-bold text-xs md:text-sm lg:text-sm"
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
          icon: "Amazon.png",
          key: 1,
        },
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
          icon: "kotak811.png",
          key: 6,
        },
        {
          icon: "PAYTM.png",
          key: 7,
        },
        {
          icon: "RBI.png",
          key: 8,
        },
        {
          icon: "rediff.png",
          key: 9,
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
          icon: "yatra.png",
          key: 12,
        },
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