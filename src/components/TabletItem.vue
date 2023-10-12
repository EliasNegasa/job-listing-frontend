<template>
  <span
    class="text-cyan-dark bg-grayish-cyan-light font-bold pt-1.5 pb-1 px-2.5 rounded-md cursor-pointer transition-all hover:bg-cyan-dark hover:text-white">
    {{ title }}
  </span>
</template>

<script setup>
defineProps({
  title: String
})
</script> 
