<template>
    <div>
      <h1>Login or Create an Account</h1>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <form v-if="!isAuthenticated" @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <form v-if="!isAuthenticated" @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" required>
        </div>
        <div>
          <label for="confirm-password">Confirm Password:</label>
          <input type="password" name="confirm-password" v-model="confirmPassword" required>
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div v-else>
        <p>You are authenticated!</p>
        <router-link to="/todos">Go to Todo List</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useAuth } from '../modules/auth'
  import { useRouter } from 'vue-router'
  
  export default {
    setup() {
      const email = ref('')
      const password = ref('')
      const confirmPassword = ref('')
      const errorMessage = ref('')
      const isAuthenticated = ref(false)
      const { login, createAccount } = useAuth()
      const router = useRouter()
  
      const submitForm = async () => {
        try {
          if (router.currentRoute.value.path === '/login') {
            await login(email.value, password.value)
          } else {
            if (password.value !== confirmPassword.value) {
              throw new Error('Passwords do not match')
            }
            await createAccount(email.value, password.value)
          }
          isAuthenticated.value = true
          errorMessage.value = ''
        } catch (error) {
          console.error(error)
          errorMessage.value = error.message
        }
      }
  
      return {
        email,
        password,
        confirmPassword,
        errorMessage,
        isAuthenticated,
        submitForm
      }
    }
  }
  </script>
  
  <style>
  .error-message {
    color: red;
  }
  </style>