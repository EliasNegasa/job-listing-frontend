<template>
  <NotificationBar v-if="error" :message="error" />
  <JobItem v-for="job in jobs" :key="job.id" :job="job" />
  <div class="flex justify-end space-x-4">

    <div class="flex justify-between items-center mb-4">
      <button @click="prevPage" :disabled="!links.prev"
        class="disabled:opacity-25 cursor-pointer sm:flex hidden hover:opacity-80 py-3 px-6 bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center">
        <svg class="fill-white mr-2" xmlns="http://www.w3.org/2000/svg" height="1em"
          viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
        Prev
      </button>
    </div>
    <div class="flex justify-between items-center mb-4"> {{ jobStore.metadata.page }} of {{ jobStore.metadata.totalPage }} pages
    </div>
    <div class="flex justify-between items-center mb-4">

      <button @click="nextPage" :disabled="!links.next"
        class="disabled:opacity-25 cursor-pointer sm:flex hidden hover:opacity-80 py-3 px-6 bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center">
        Next
        <svg class="fill-white ml-2" xmlns="http://www.w3.org/2000/svg" height="1em"
          viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
        </svg>

      </button>
    </div>
  </div>
</template>

<script setup>
import JobItem from './JobItem.vue'
import { useJobStore } from '../stores/jobs'
import { storeToRefs } from 'pinia'
import NotificationBar from './NotificationBar.vue';
import { reactive, ref } from 'vue'

const jobStore = useJobStore()

const { jobs, error, links, metadata } = storeToRefs(jobStore)

jobStore.fetchJobs()

function prevPage() {
  console.log("NEXT PAGE", links.value.prev);
  jobStore.fetchJobs(`http://localhost:3000${links.value.prev}`)
}

function nextPage() {
  console.log("NEXT PAGE", links.value.next);
  // metadata.limit += 1
  jobStore.fetchJobs(`http://localhost:3000${links.value.next}`)
}

</script>
