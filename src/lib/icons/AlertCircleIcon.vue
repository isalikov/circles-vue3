<script setup lang="ts">
import type { IconProps } from './types'

const props = withDefaults(defineProps<IconProps>(), {
  size: 100,
  color: 'red',
})
</script>

<template>
  <svg
    :width="props.size"
    :height="props.size"
    :stroke="props.color"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="feather feather-alert-circle"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
</template>
