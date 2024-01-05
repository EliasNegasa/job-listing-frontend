<template>
  <div class="container mx-auto max-w-5xl py-24">
    <Test :items="items" value="D" />
    <FilterBox />
    <div class="transition-all duration-500 flex flex-col space-y-12 md:space-y-6">
      <JobList />
    </div>
  </div>
</template>

<script setup>
import FilterBox from '@/components/FilterBox.vue'
import JobList from '@/components/JobList.vue'
import Test from '../components/test.vue'

const items = ["A", "B", "D"]
</script>
