<script setup lang="ts">
import { onMounted, ref, useCssModule } from 'vue'
import { TheCounter } from '@/lib'

const styles = useCssModule()

const counter = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    if (counter.value <= 100) {
      counter.value++
    } else {
      clearInterval(interval)
    }
  }, 10)
})
</script>
<template>
  <div :class="styles.container">
    <TheCounter :value="counter" type="progress" />
    <TheCounter :value="counter" type="succeed" />
    <TheCounter :value="counter" type="warning" />
    <TheCounter :value="counter" type="error" />
  </div>
</template>

<style module>
.container {
  display: flex;
  width: 1280px;
  gap: 24px;
}
</style>
