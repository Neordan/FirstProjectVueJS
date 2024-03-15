<template>
    <div class="register">
      <h2>Connexion</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-box1">
          <input type="text" id="email" placeholder="Email" v-model="email" required>
          <input type="password" id="password" placeholder="Password" v-model="password" required>
        </div> 
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
    }
  };
  </script>
  