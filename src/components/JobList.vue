<template>
  <NotificationBar v-if="error" :message="error" />
  <JobItem v-for="job in jobs" :key="job.id" :job="job" />
  <div class="flex justify-end space-x-4">
    <div class="flex justify-between items-center mb-4">
      <button
        @click="prevPage"
        :disabled="!links.prev"
        class="disabled:opacity-25 cursor-pointer sm:flex hidden hover:opacity-80 py-3 px-6 bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center"
      >
        <font-awesome-icon icon="fa-solid fa-chevron-left" class="mr-2" />
        Prev
      </button>
    </div>
    <div class="flex justify-between items-center mb-4">
      {{ jobStore.metadata.page }} of {{ jobStore.metadata.totalPage }} pages
    </div>
    <div class="flex justify-between items-center mb-4">
      <button
        @click="nextPage"
        :disabled="!links.next"
        class="disabled:opacity-25 cursor-pointer sm:flex hidden hover:opacity-80 py-3 px-6 bg-cyan-dark flex text-base leading-4 font-normal text-white justify-center items-center"
      >
        Next
        <font-awesome-icon icon="fa-solid fa-chevron-right" class="ml-2" />
      </button>
    </div>
  </div>
</template>

<script setup>
import JobItem from './JobItem.vue'
import { useJobStore } from '../stores/jobs'
import { storeToRefs } from 'pinia'
import NotificationBar from './NotificationBar.vue'
import { reactive, ref } from 'vue'

const jobStore = useJobStore()

const { jobs, error, links } = storeToRefs(jobStore)

const baseUrl = import.meta.env.VITE_APP_API_URL

jobStore.fetchJobs()

function prevPage() {
  jobStore.fetchJobs(`${baseUrl}${links.value.prev}`)
}

function nextPage() {
  console.log(links.value.next)
  jobStore.fetchJobs(`${baseUrl}${links.value.next}`)
}
</script>
