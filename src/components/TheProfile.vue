<template>
  <div class="flex space-x-3">
    <template v-if="authStore.token">
      <button @click="authStore.logout()">Logout</button>
      <div
        class="flex justify-center items-center relative rounded-full ring-2 ring-gray-100 w-12 h-12"
      >
        <span class="text-gray-500 relative top-1"> {{ nameAvatar }} </span>
      </div>
    </template>
    <RouterLink v-else to="/login">Login</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

const nameAvatar = computed(() => {
  return `${authStore.user.firstName?.at(0)}${authStore.user.lastName?.at(0)}`
})
</script>
