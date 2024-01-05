<template>
  <label v-if="label" class="block text-gray-600">{{ label }}</label>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs"
    class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
  />
  <template v-if="validation && validation.$errors">
    <span v-for="error in validation.$errors" :key="error.$uid" class="text-red-600">
      {{ error.$message }}
    </span>
  </template>
</template>

<script setup>
defineProps({
  label: {
    type: [String, Boolean],
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  validation: {
    type: Object
  }
})
</script>
