<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">{{ isRegister ? 'Register' : 'Login' }}</div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{ error }}</div>
            <form>
              <div class="form-group">
                <input type="email" class="form-control" id="email" v-model="email" placeholder="Enter email">
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
              </div>
              <router-link to="/todos">
                <button>Login</button>
              </router-link>
              <router-link to="/about">
              <button>Don't have an account? Register.</button>
              </router-link>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AuthLogin',
  data() {
    return {
      email: '',
      password: '',
      isRegister: false,
      error: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await axios.post(`http://localhost:3000/${this.isRegister ? 'register' : 'login'}`, {
          email: this.email,
          password: this.password
        });

        localStorage.setItem('token', response.data.token);
        this.$router.push('/dashboard');
      } catch (error) {
        this.error = error.response.data.message;
      }
    }
    
  }
};
</script>

<style lang="scss" scoped>
/* Style the title */
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Style the form inputs */
input {
  width: 50%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Style the todo list items */
.todo-item {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: block;
}

/* Style the delete and edit buttons */
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #3e8e41;
}
.card-header {
  font-size: 24px;
}
</style>
