<template>
  <div id="app">
    <router-view></router-view>
    <notifications group="foo" />
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style>
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
