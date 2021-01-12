<template>
  <div class="p-10 space-y-10">
    <div
      class="p-10 bg-gray-800 space-y-6 md:space-y-0 md:flex justify-around rounded-lg items-center"
    >
      <div class="text-white text-xl">
        <router-link to="/careers">
          <span class="cursor-pointer">Careers</span>
          ></router-link
        >
        <router-link to="/careers/jobs">
          <span class="cursor-pointer">All Jobs</span> >
        </router-link>
        <span class="text-blue-500">Job</span>
      </div>

      <div class="capitalize text-white text-xl">
        {{ jobTitle }}
      </div>
    </div>

    <div
      class="grid space-y-10 md:space-y-0 md:gap-14 grid-cols-1 md:grid-cols-3 "
    >
      <div class="col-span-2 space-y-8">
        <div class="xs:flex-col space-y-6 md:space-y-0 md:flex justify-between">
          <div class="space-y-2">
            <div class="uppercase text-md font-semibold text-gray-600">
              Job Title
            </div>
            <div class="text-md text-gray-500 capitalize">
              {{ jobTitle }}
            </div>
          </div>

          <div class="md:text-right space-y-2">
            <div class="uppercase text-md font-semibold text-gray-600">
              date
            </div>
            <div
              class="text-sm font-semibold text-gray-500 bg-gray-200 p-1 rounded-md"
            >
              {{ new Date(createdAt).toLocaleDateString() }}
            </div>
          </div>
        </div>

        <div
          class="shadow-lg py-6 rounded-lg p-4 border-red-200 border-l-0 border-t-4"
        >
          <div class="grid place-items-center grid-cols-1 md:grid-cols-3 ">
            <div
              class="space-y-4 cursor-pointer p-4 hover:bg-blue-50 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full"
            >
              <div>
                <svg
                  class="w-10 mx-auto h-10 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="text-center capitalize text-md text-gray-500">
                {{ location }}
              </div>
            </div>
            <div
              class="space-y-4 cursor-pointer p-4 hover:bg-blue-50 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full"
            >
              <div>
                <svg
                  class="text-blue-400 w-10 h-10 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div class="text-center capitalize text-md text-gray-500">
                {{ exp }}
              </div>
            </div>
            <div
              class="space-y-4 cursor-pointer p-4 hover:bg-blue-50 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full"
            >
              <div>
                <svg
                  class="w-10 h-10 text-blue-400 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="text-center capitalize text-md text-gray-500">
                {{ salary }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <div>
            <svg
              class="w-6 h-6 text-gray-400 hover:text-blue-300 transition duration-600 ease-in"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                fill="#fff"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <div class="text-gray-600 font-semibold uppercase text-md">
            Education :
          </div>
          <div class="text-gray-500 font-semibold text-md">{{ education }}</div>
        </div>

        <div class="flex-none">
          <div class="flex space-x-2 items-center">
            <div>
              <svg
                class="h-6 w-6 text-gray-400 hover:text-blue-300 transition duration-600 ease-in"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </div>
            <div class="text-gray-600 font-semibold uppercase text-md">
              Job Description
            </div>
          </div>
          <div>
            <p class="p-8 text-justify text-gray-500">
              {{ jobDescription }}
            </p>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <div>
            <svg
              class="w-6 h-6 text-gray-400 hover:text-blue-300 transition duration-600 ease-in"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
          </div>
          <div class="text-gray-600 font-semibold uppercase text-md">
            Key Skills :
          </div>
          <div class="text-gray-500 font-semibold text-md">{{ keySkills }}</div>
        </div>
      </div>

      <form @submit="applyJobForm">
        <div class="space-y-8">
          <div class="space-y-2">
            <div>
              <p class="uppercase text-sm text-gray-600 font-bold">full name</p>
            </div>
            <div>
              <input
                required
                v-model="applyJob.name"
                class="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=""
              />
            </div>
          </div>
          <div class="space-y-2">
            <div>
              <p class="uppercase text-sm text-gray-600 font-bold">Email</p>
            </div>
            <div>
              <input
                required
                v-model="applyJob.email"
                class="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder=""
              />
            </div>
          </div>
          <div class="space-y-2">
            <div>
              <p class="uppercase text-sm text-gray-600 font-bold">
                Contact number
              </p>
            </div>
            <div>
              <input
                required
                v-model="applyJob.contactNumber"
                class="w-full bg-gray-100 text-gray-900 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder=""
              />
            </div>
          </div>

          <!-- <div
          class="p-8 border-dashed border-4 border-light-gray-500 cursor-pointer"
        >
          <div class="text-center text-gray-500 capitalize">
            upload resume
          </div>
        </div> -->
          <div>
            <button
              class="p-2 w-full text-white rounded-lg focus:outline-none"
              style="background: linear-gradient(90deg, #ff8657 0%, #ff3225 100%);"
              type="submit"
            >
              {{ appliedJobIsLoading ? "Applying..." : "Apply" }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { getSingleJob, applyJob } from "../REST/Jobs";
export default {
  name: "SingleJob",
  data() {
    return {
      jobTitle: "",
      keySkills: "",
      location: "",
      jobDescription: "",
      salary: "",
      exp: "",
      education: "",
      createdAt: "",
      applyJob: {
        name: "",
        email: "",
        contactNumber: "",
      },
      appliedJobIsLoading: false,
    };
  },
  async mounted() {
    try {
      const response = await getSingleJob.getSingleJob(
        "api/careers/job?id=" + window.location.pathname.split("/")[2]
      );
      const {
        location,
        experience,
        salary,
        job_description,
        key_skills,
        education,
        job_title,
        created_at,
      } = response.job;
      this.jobTitle = job_title;
      this.keySkills = key_skills;
      this.location = location;
      this.jobDescription = job_description;
      this.salary = salary;
      this.exp = experience;
      this.education = education;
      this.createdAt = created_at;
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    applyJobForm(e) {
      e.preventDefault();
      this.appliedJobIsLoading = true;
      applyJob
        .applyJob("api/careers/applyjob", this.applyJob)
        .then((resp) => {
          this.appliedJobIsLoading = false;
          console.log("POST=======>", resp);
          this.applyJob = {};
          this.$notify({
            group: "foo",
            title: "Applied for Job",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
console.log();
</script>
<style scoped></style>
