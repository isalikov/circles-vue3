<script setup lang="ts">
import type { TheCounterProps } from './types'
import { computed } from 'vue'

const props = withDefaults(defineProps<TheCounterProps>(), {
  value: 0,
  size: 100,
  type: 'progress',
})

const color = computed(() => {
  switch (props.type) {
    case 'progress':
      return 'blue'

    case 'warning':
      return 'yellow'

    case 'error':
      return 'red'

    case 'succeed':
      return 'green'

    default:
      return 'blue'
  }
})
</script>

<template>
  <div class="container">
    <svg :width="props.size" :height="props.size" viewBox="0 0 36 36" class="circle-progress">
      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e0e0" stroke-width="3" />
      <circle
        cx="18"
        cy="18"
        r="15.915"
        fill="none"
        :stroke="color"
        stroke-width="3"
        stroke-dasharray="100 100"
        :stroke-dashoffset="100 - props.value"
        stroke-linecap="round"
        transform="rotate(-90 18 18)"
      />
    </svg>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
