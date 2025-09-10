<script setup lang="ts">
import type { TheCounterProps } from './types'
import { useColor } from './useColor'
import { watch } from 'vue'

const props = withDefaults(defineProps<TheCounterProps>(), {
  value: 0,
  size: 100,
  type: 'progress',
})

watch(props, (newValue) => {
  console.log(newValue.value)
})

const color = useColor(props.type)
</script>

<template>
  <div class="container">
    <svg :width="props.size" :height="props.size" viewBox="0 0 36 36" class="circle-progress">
      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e0e0" stroke-width="3" />
      <circle
        :stroke-dashoffset="100 - props.value"
        cx="18"
        cy="18"
        r="15.915"
        fill="none"
        :stroke="color"
        stroke-width="3"
        stroke-dasharray="100 100"
        stroke-linecap="round"
        transform="rotate(-90 18 18)"
      />
    </svg>
    {{ props.value }}
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
