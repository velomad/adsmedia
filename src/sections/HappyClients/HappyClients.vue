<template>
  <div class="flex bg-gray-900 h-screen justify-center items-center">
    <div class="space-y-20">
      <div class="flex-col space-y-10 text-center w-full">
        <h1
          style="text-shadow: 3px 4px #ccc"
          class="text-center text-gray-600 text-4xl capitalize"
        >
          Our Happy Customers
        </h1>
        <p
          class="lg:w-2/3 mx-auto leading-relaxed tracking-widest font-bold text-sm"
        >
          THE UPSHOT OF ALL THE HARDWORK
        </p>
      </div>
      <div style="width: 95vw">
        <infinite-slide-bar duration="25s">
          <div class="flex justify-between items-center">
            <div v-for="items in Brands" :key="items.key">
              <img :src="'/img/' + items.icon" width="200" class="ml-32" />
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