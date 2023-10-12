<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img src="https://placehold.co/800x/5ba4a4/ffffff.png?text=ATS&font=Montserrat" alt="Placeholder Image"
        class="object-cover w-full h-full">
    </div>
    <!-- Right: Login Form -->
    <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
      <h1 class="text-2xl font-semibold mb-4">Login</h1>

      <form @submit.prevent="submit">

        <!-- Username Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-600">Email Address</label>
          <input v-model="state.email" type="text" id="email" name="email"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
          <span v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span>
        </div>


        <!-- Password Input -->
        <div class="mb-4">
          <label for="password" class="block text-gray-600">Password</label>
          <input v-model="state.password" type="password" id="password" name="password"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autocomplete="off">
          <span v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-600"> {{ error.$message }} </span>
        </div>

        <div class="mb-4">
          <NotificationBar :message="error" v-if="error" />
        </div>

        <!-- Login Button -->
        <button type="submit" :disabled="authStore.isLoading"
          class="bg-cyan-dark hover:bg-tranparent text-white font-semibold rounded-md py-2 px-4 w-full disabled:opacity-25">Login</button>
      </form>

    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import NotificationBar from './NotificationBar.vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const state = reactive({
  email: '',
  password: ''
})

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter a valid email address", email)
    },
    password: {
      required: helpers.withMessage("Password is required", required),
      minLength: helpers.withMessage("Password should be at least 8 characters long", minLength(8))
    }
  }
})

const v$ = useVuelidate(rules, state)

const authStore = useAuthStore()

const { error } = storeToRefs(authStore)

async function submit() {
  const isvalid = await v$.value.$validate()
  if (isvalid) {
    authStore.login({
      email: state.email,
      password: state.password
    })
    console.log('Valid');

  } else {
    console.log('Validation Error');
  }
}

// const router = useRouter()

// console.log("AUTH", isAuthenticated.value);

// isAuthenticated.value ? router.push('/jobs') : ''

</script>
