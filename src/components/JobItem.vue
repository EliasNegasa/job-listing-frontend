<template>
  <div>
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center bg-white px-4 pb-8 md:p-8 rounded-md shadow-xl shadow-cyan-dark/10">
      <div class="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-6 min-w-max">
        <div class="w-16 h-16 md:w-[88px] md:h-[88px] relative -top-8 md:top-0 rounded-full overflow-hidden">
          <img src="http://dummyimage.com/150x150.png/ff4444/ffffff" alt="Company Logo" />
        </div>
        <div class="space-y-2">
          <div class="space-x-1">
            <span class="text-cyan-dark font-bold mr-3">{{ job.company }}</span>
            <span v-if="job.isFeatured"
              class="bg-grayish-cyan-dark text-white text-xs uppercase p-2 pb-1.5 rounded-full">Featured</span>
            <span v-if="job.isNew" class="bg-cyan-dark text-white text-xs uppercase p-2 pb-1.5 rounded-full">New</span>
          </div>
          <h4 class="font-bold text-[21px] hover:text-cyan-dark transition-all cursor-pointer">
            {{ job.position }}
          </h4>
          <ul class="flex list-disc list-inside space-x-4">
            <li class="text-grayish-cyan-medium list-none">{{ convertDate(job.postedDate) }}</li>
            <li class="text-grayish-cyan-medium">{{ job.contract }}</li>
            <li class="text-grayish-cyan-medium">{{ job.location }}</li>
          </ul>
        </div>
      </div>
      <div
        class="flex items-center md:justify-end flex-wrap gap-2 md:gap-4 my-4 md:my-0 border-t-[1px] md:border-t-0 pt-4 md:pt-0 md:ml-4 border-grayish-cyan-medium">
        <!-- <TabletItem v-for="(tablet, index) in tablets" :key="index" :title="tablet" /> -->
        <TabletItem :title="job.role" />
        <TabletItem :title="job.level" />
        <TabletItem v-for="(language, index) in job.languages" :key="index" :title="language" />
        <TabletItem v-for="(tool, index) in job.tools" :key="index" :title="tool" />
      </div>
    </div>
  </div>
</template>

<script setup>
import convertDate from '../helpers/convertDate'
import TabletItem from './TabletItem.vue'
import { useJobStore } from '../stores/jobs'

const props = defineProps({
  job: Object
})

// const tablets = [props.job.role, props.job.level, ...props.job.languages, ...props.job.tools]

</script>
