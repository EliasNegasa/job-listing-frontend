<template>
  <div class=" flex space-x-3">
    <RouterLink v-if="!authStore.token" to="/login" >Login</RouterLink>
    <button v-if="authStore.token" @click="authStore.logout()">Logout</button>
    <div v-if="authStore.token"
      class="flex justify-center items-center relative rounded-full ring-2 ring-gray-100 w-12 h-12">
      <span class="text-gray-500 relative top-1">{{ authStore.user.firstName?.at(0) }}{{ authStore.user.lastName?.at(0)
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()


</script>
