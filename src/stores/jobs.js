import axios from 'axios'
import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

export const useJobStore = defineStore('job', () => {
  const jobs = ref([])
  const isLoading = ref(false)
  const error = ref('')
  const links = reactive({
    prev: '',
    next: ''
  })
  const metadata = reactive({
    total: 0,
    page: 1,
    limit: 10,
    totalPage: 1
  })

  const baseUrl = import.meta.env.VITE_APP_API_URL

  async function fetchJobs(url = `${baseUrl}/api/jobs`) {
    isLoading.value = true

    try {
      const { data } = await axios.get(url)
      jobs.value = data.data
      links.prev = data.links.prev
      links.next = data.links.next
      metadata.limit = data.metadata.limit
      metadata.page = data.metadata.page
      metadata.total = data.metadata.total
      let dividePages = Math.ceil(metadata.total / metadata.limit)
      metadata.totalPage = dividePages == 0 ? 1 : dividePages
    } catch (err) {
      error.value = err.response.data.message || 'Error'
    } finally {
      isLoading.value = false
    }
  }

  return { jobs, fetchJobs, error, isLoading, links, metadata }
})
