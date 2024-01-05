<template>
  <button :class="buttonClass" v-bind="$attrs">
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Button'
  },
  buttonType: {
    type: String,
    default: 'primary'
  }
})

const buttonClass = computed(() => {
  return { [props.buttonType]: true }
})
</script>

<style scoped>
button {
  @apply font-semibold rounded-md py-2 px-4 w-full disabled:opacity-25 border-cyan-dark border-2;
}

.primary {
  @apply bg-cyan-dark text-white;
}

.secondary {
  @apply bg-transparent text-cyan-dark;
}
</style>
