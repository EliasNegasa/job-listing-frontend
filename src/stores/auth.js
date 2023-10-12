import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(JSON.parse(localStorage.getItem('user')) || {})
  const token = ref(localStorage.getItem('token') || '')
  const isLoading = ref(false)
  const error = ref('')

  async function login(userData) {
    isLoading.value = true

    try {
      const { data } = await axios.post('http://localhost:3000/auth/login', userData)

      user.value = data.user
      token.value = data.token

      localStorage.setItem('token', JSON.stringify(token.value))
      localStorage.setItem('user', JSON.stringify(user.value))

      router.push('/jobs')
    } catch (err) {
      error.value = err.response.data.message || 'Error'

      router.replace({ name: 'login' })
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    user.value = {}
    token.value = ''
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/login')
  }

  return { user, token, login, error, isLoading, logout }
})
