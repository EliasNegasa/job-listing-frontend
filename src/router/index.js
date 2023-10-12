import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Jobs from '../views/JobsView.vue'
import Login from '../views/LoginView.vue'
import NotFound from '../views/NotFoundView.vue'
import { useAuthStore } from '../stores/auth'
// import { storeToRefs } from 'pinia'

// const authStore = useAuthStore()

// const { isAuthenticated } = storeToRefs(authStore)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jobs',
      name: 'Jobs',
      component: Jobs,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/:notFound',
      component: NotFound
    }
  ]
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  if (to.meta.requiresAuth && !auth.token) {
    next('login')
  } else {
    next()
  }
})

export default router
