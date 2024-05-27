import { createMemoryHistory, createRouter } from 'vue-router'

import Software from '../src/components/Software.vue'
import Account from '../src/components/Account.vue'

const routes = [
  { path: '/Software', component: Software },
  { path: '/Account', component: Account },

]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;