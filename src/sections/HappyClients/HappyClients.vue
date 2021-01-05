<template>
  <div style="background:url(/img/geometric-leaves.png)">
    <div class="flex flex-col text-center w-full mb-20">
      <h2
        class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"
      >
        Adsmidea
      </h2>
      <h1
        class="text-5xl font-medium title-font mb-4 text-gray-600"
      >
        Our Happy Customers
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p>
    </div>
    <infinite-slide-bar>
      <div class="items">
        <div v-for="items in Brands" :key="items.key">
          <div class="f-left pd-t-8px mg-r-10px">
            <img :src="'/img/' + items.icon" />
          </div>
        </div>
      </div>
    </infinite-slide-bar>
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
            key: 3
        }
      ],
    };
  },
};
</script>
<style scoped>
.items {
  display: flex;
  justify-content: space-around;
}
</style>