<script setup lang="ts">
import { useCssModule } from 'vue'
import { RouterLink } from 'vue-router'

const styles = useCssModule()
</script>
<template>
  <nav :class="styles.container">
    <div :class="styles.content">
      <RouterLink :class="styles.link" :activeClass="styles.active" to="/">Home</RouterLink>
      <RouterLink :class="styles.link" :activeClass="styles.active" to="/progress"
        >Progress</RouterLink
      >
      <RouterLink :class="styles.link" :activeClass="styles.active" to="/diagram"
        >Diagram</RouterLink
      >
    </div>
  </nav>
</template>

<style module>
.container {
  display: flex;
  border-bottom: 1px solid #00000033;
  height: 46px;
  align-items: center;
  justify-content: center;
}

.content {
  width: 1280px;
  display: flex;
  gap: 12px;
}

.link {
  text-decoration: none;
  color: #00000099;

  &:hover {
    border-bottom: 1px dashed #00000055;
  }
}

.active {
  color: #000000ff;
  border-bottom: 1px dashed #00000055;
}
</style>
