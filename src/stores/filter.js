import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterStore = defineStore('filter', () => {
  const filter = ref([])

  function addFilter(category) {
    if (!filter.value.includes(category)) {
      filter.value.push(category)
    }
  }

  function removeFilter(category) {
    filter.value = filter.value.filter((item) => item !== category)
  }

  function clearFilter() {
    filter.value = []
  }

  return { filter, addFilter, removeFilter, clearFilter }
})
