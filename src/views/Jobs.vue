<template>
  <div class="p-10 space-y-10">
    <div class="p-10 bg-gray-800 space-y-6 md:space-y-0 md:flex justify-around rounded-lg items-center">
      <div class="text-white text-xl">
        <router-link to="/careers"> <span class="cursor-pointer">Careers</span> ></router-link>
        <span class="text-blue-500"> Jobs</span>
      </div>
      <div class="text-white text-xl">
        Current Job Openings
      </div>
    </div>
    <div class="shadow-xl rounded-lg p-10">
      <div class="grid gap-10 place-items-center grid-cols-1 md:grid-cols-2">
        <div v-for="(item, index) in jobs" :key="index">
          <router-link :to="'/job/' + item.id">
            <div
              class="text-center capitalize cursor-pointer p-4 hover:bg-blue-100 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <div class="text-blue-400">
                {{ item.job_title }}
              </div>
              <div class="text-gray-500">
                {{ item.location }}
              </div>
            </div>
          </router-link>
        </div>

        <!-- <div
          class="text-center cursor-pointer p-4 hover:bg-blue-100 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          <div class="text-blue-400">
            Human Resources Manager
          </div>
          <div class="text-gray-500">
            Oklahoma City
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { getAllJobs } from "../REST/Jobs";

export default {
  name: "Jobs",
  data() {
    return {
      jobs: [],
    };
  },
  async mounted() {
    try {
      const response = await getAllJobs.getAllJobs("api/careers/jobs");
      this.jobs = response.jobs;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
