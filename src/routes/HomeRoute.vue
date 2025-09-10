<script setup lang="ts">
import { useCssModule } from 'vue'
import { TheCounter } from '@/lib'

const styles = useCssModule()
</script>

<template>
  <div :class="styles.container">
    <TheCounter :initial-value="500" />
  </div>
</template>

<style module>
.container {
  display: flex;
}
</style>
