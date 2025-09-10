<script setup lang="ts">
import { ref } from 'vue'
import type { TheCounterProps } from './types'

const { initialValue } = defineProps<TheCounterProps>()
const value = ref(initialValue)
</script>

<template>
  <div class="container">{{ value }}</div>
</template>

<style scoped>
.container {
  outline: 1px solid blue;
}
</style>
