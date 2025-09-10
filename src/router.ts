import { createWebHistory, createRouter } from 'vue-router'

import { HomeRoute, DiagramRoute, ProgressRoute } from '@/routes'

const routes = [
  { path: '/', component: HomeRoute },
  { path: '/diagram', component: DiagramRoute },
  { path: '/progress', component: ProgressRoute },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
