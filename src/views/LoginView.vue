<script lang="ts">
  import authService from '@/service/authService';
  import axios from 'axios';

  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleSubmit() {
        authService
          .login(this.username, this.password)
          .then(() => this.$router.push("/library"))
          .catch(err => console.warn(err));
      }
    }
  }
</script>

<template>

  <form @submit.prevent="handleSubmit">
    <h2>Login page</h2>

    <div>
      <label>Username </label>
      <input type="text" v-model="username"/>
    </div>

    <div>
      <label>Password</label>
      <input type="password" v-model="password"/>
    </div>

    <button type="submit">Login</button>
  </form>
</template>