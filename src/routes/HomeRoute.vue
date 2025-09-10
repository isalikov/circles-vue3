<script setup lang="ts">
import { useCssModule } from 'vue'

const styles = useCssModule()
</script>

<template>
  <div :class="styles.container">...</div>
</template>

<style module>
.container {
  display: flex;
  width: 1280px;
}
</style>
