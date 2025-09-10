<script setup lang="ts">
import { onMounted, ref, useCssModule } from 'vue'
import { TheCounter } from '@/lib'

const styles = useCssModule()

const counter = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (counter.value <= 100) {
      counter.value += 10
    } else {
      clearInterval(interval)
    }
  }, 100)
})
</script>
<template>
  <div :class="styles.container">
    <TheCounter :value="counter" type="progress" :size="48" />
    <TheCounter :value="counter" type="succeed" :size="64" />
    <TheCounter :value="counter" type="warning" :size="72" />
    <TheCounter :value="counter" type="error" :size="92" />
  </div>
</template>

<style module>
.container {
  display: flex;
  width: 1280px;
  gap: 24px;
}
</style>
