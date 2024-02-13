<template>
  <div class="register">
    <h2>Formulaire</h2>
    <form @submit.prevent="handleSubmit">
      <div class="element">
        <label for="firstname">Prénom:</label>
        <input type="text" id="firstname" v-model="firstname" required>
      </div>
      <div class="element">
        <label for="lastname">Nom:</label>
        <input type="text" id="lastname" v-model="lastname" required>
      </div>
      <div class="element">
        <label for="birthday">Date de naissance:</label>
        <input type="date" id="dateNaissance" v-model="birthday" required>
      </div>
      <div class="element">
        <label for="pseudo">Pseudo:</label>
        <input type="text" id="pseudo" v-model="pseudo" required>
      </div>
      <div class="element">
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
      </div>
      <div class="element">
        <label for="question">Aimez-vous Laravel ?</label>
        <select id="question" v-model="question" required>
          <option value="">Choisir...</option>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
      </div>
      <div class="element select">
        <label for="likeVueJs">Aimez-vous Vue.js?</label>
        <input type="checkbox" id="likeVueJs" v-model="likeVueJs">
      </div>
      <div class="element">
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="element">
        <label for="confirmPassword">Confirmation mot de passe:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  <!-- Modal -->
  <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <p>Prénom: {{ firtsname }}</p>
        <p>Nom: {{ lastname }}</p>
        <p>Date de naissance: {{ birthday }}</p>
        <p>Pseudo: {{ pseudo }}</p>
        <p>Description: {{ description }}</p>
        <p>Aimez-vous Laravel ? {{ question }}</p>
        <p>Aimez-vous Vue.js ? {{ likeVueJs ? 'Oui' : 'Non' }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fistname: '',
      lastname: '',
      birthday: '',
      pseudo: '',
      description: '',
      likeVueJs: false,
      password: '',
      confirmPassword: '',
      showModal: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>