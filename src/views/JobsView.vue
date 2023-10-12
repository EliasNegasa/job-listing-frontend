<template>
    <BaseHeader />

    <div class="container mx-auto max-w-5xl py-24">
        <FilterBox />
        <div class="transition-all duration-500 flex flex-col space-y-12 md:space-y-6">
            <JobList />
        </div>
    </div>
</template>

<script setup>
import BaseHeader from '../components/BaseHeader.vue';
import FilterBox from '../components/FilterBox.vue';
import JobList from '../components/JobList.vue';

</script>