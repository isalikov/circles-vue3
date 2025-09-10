<script setup lang="ts">
import type { TheCounterProps } from './types'
import { useColor } from './useColor'
import { useCssModule } from 'vue'
import { AlertCircleIcon, CheckIcon, XIcon } from '@/lib'

const styles = useCssModule()

const props = withDefaults(defineProps<TheCounterProps>(), {
  value: 0,
  size: 100,
  type: 'progress',
})

const color = useColor(props.type)
</script>

<template>
  <div :class="styles.container" :style="{ width: `${props.size}px`, height: `${props.size}px` }">
    <svg :width="props.size" :height="props.size" viewBox="0 0 36 36" :class="styles.progress">
      <circle cx="18" cy="18" r="15.915" fill="none" stroke="#e0e0e0" stroke-width="3" />
      <circle
        :stroke-dashoffset="100 - Math.min(100, Math.max(0, props.value))"
        cx="18"
        cy="18"
        r="15.915"
        fill="none"
        :stroke="color"
        stroke-width="3"
        stroke-dasharray="100 100"
        stroke-linecap="round"
        transform="rotate(-90 18 18)"
      />
    </svg>
    <div :class="styles.value" v-if="props.type === 'progress'">
      <span :style="{ transform: `scale(${props.size * 0.01})` }"
        >{{ Math.min(100, Math.max(0, props.value)) }}%</span
      >
    </div>
    <div :class="styles.value" v-if="props.type === 'succeed'">
      <CheckIcon :color="color" :size="props.size * 0.3" />
    </div>
    <div :class="styles.value" v-if="props.type === 'error'">
      <XIcon :color="color" :size="props.size * 0.3" />
    </div>
    <div :class="styles.value" v-if="props.type === 'warning'">
      <AlertCircleIcon :color="color" :size="props.size * 0.3" />
    </div>
  </div>
</template>

<style module>
.container {
  display: flex;
  position: relative;
}

.progress {
  circle:last-of-type {
    transition: stroke-dashoffset 0.5s ease-out;
  }
}

.value {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
  }
}
</style>
