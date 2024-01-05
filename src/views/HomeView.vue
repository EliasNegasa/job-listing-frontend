<script setup>
import JobSearchForm from '@/components/JobSearchForm.vue'
</script>

<template>
  <main>
    <section class="flex items-center p-1 mt-10 dark:bg-gray-700">
      <div class="container flex flex-col items-center">
        <div class="flex flex-col max-w-md text-center">
          <p class="text-2xl md:text-3xl dark:text-gray-400">Home Page</p>
        </div>
      </div>
    </section>
    <job-search-form />
  </main>
</template>
