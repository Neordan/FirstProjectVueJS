<template>
  <div class="register">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <div class="input-box1">
        <input type="text" id="email" placeholder="Email" v-model="email" required>
        <input type="password" id="password" placeholder="Password" v-model="password" required>
      </div>
      <button class="btn" type="submit">Connexion</button>
    </form>
    <p v-if="loginError" style="color: red;">{{ loginError }} {{ error }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: '',
      loginError: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch("./data/user.json");
        const users = await response.json();
        
        const user = users.find(u => u.email === this.email && u.password === this.password);
        if (user) {
          this.$router.push({ name: 'profile', query: { id: user.id } });
        } else {
          this.loginError = 'Email ou mot de passe incorrect.';
        }
      } catch (error) {
        console.error("Erreur de chargement des utilisateurs :", error);
      }
    }
  }
};
</script>
