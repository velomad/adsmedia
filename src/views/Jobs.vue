<template>
  <div class="p-10 space-y-10">
    <div class="p-10 bg-gray-800 flex justify-around rounded-lg items-center">
      <div class="text-white text-xl">
        <span @click="$router.go(-1)" class="cursor-pointer">Careers</span> >
        <span class="text-blue-500">Jobs</span>
      </div>
      <div class="text-white text-2xl">
        Current Job Openings
      </div>
    </div>
    <div class="shadow-xl rounded-lg p-10">
      <div class="grid gap-10 place-items-center grid-cols-1 md:grid-cols-2">
        <div
          class="text-center cursor-pointer p-4 hover:bg-blue-100 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div class="text-blue-400">
            Human Resources Manager
          </div>
          <div class="text-gray-500">
            Oklahoma City
          </div>
        </div>
        <div
          class="text-center cursor-pointer p-4 hover:bg-blue-100 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div class="text-blue-400">
            Human Resources Manager
          </div>
          <div class="text-gray-500">
            Oklahoma City
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Jobs",
};
</script>
