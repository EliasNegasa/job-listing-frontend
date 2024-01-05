<script setup>
import BaseHeader from '@/components/BaseHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <base-header />
  <main>
    <router-view />
  </main>
</template>
