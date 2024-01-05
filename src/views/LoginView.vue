<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://placehold.co/800x/5ba4a4/ffffff.png?text=ATS&font=Montserrat"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>
      <login-form />
    </div>
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
</script>
