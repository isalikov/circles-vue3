import { createMemoryHistory, createRouter } from 'vue-router'

import { HomeRoute } from '@/routes'

const routes = [{ path: '/', component: HomeRoute }]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
