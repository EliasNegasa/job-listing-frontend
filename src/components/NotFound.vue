<template>
    <section class="flex items-center h-screen p-16 bg-gray-50 dark:bg-gray-700">
        <div class="container flex flex-col items-center ">
            <div class="flex flex-col gap-6 max-w-md text-center">
                <h2 class="font-extrabold text-9xl text-gray-600">
                    <span class="sr-only">Error</span>404
                </h2>
                <p class="text-2xl md:text-3xl dark:text-gray-400">Sorry, we couldn't find this page.</p>
                <RouterLink to="/" class="px-8 py-4 text-xl font-semibold rounded bg-cyan-dark text-gray-50 hover:text-gray-200">
                    Back to homepage</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>
