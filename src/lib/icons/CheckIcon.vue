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
    class="feather feather-check"
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
</template>
