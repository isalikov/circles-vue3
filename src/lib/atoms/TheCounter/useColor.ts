import type { TheCounterProps } from './types'
import { computed } from 'vue'

export const useColor = (type: TheCounterProps['type']) => {
  return computed(() => {
    switch (type) {
      case 'progress':
        return '#6366f1'

      case 'warning':
        return '#f59e0b'

      case 'error':
        return '#ef4444'

      case 'succeed':
        return '#10b981'

      default:
        return '#6366f1'
    }
  })
}
