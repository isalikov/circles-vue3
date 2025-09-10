<script setup lang="ts">
import { RouterView } from 'vue-router'
import { TheHeader } from './components'
import { useCssModule } from 'vue'
const styles = useCssModule()
</script>

<template>
  <main :class="styles.container">
    <TheHeader />
    <div :class="styles.routes">
      <RouterView />
    </div>
  </main>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
}

.routes {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 28px 0;
}
</style>
