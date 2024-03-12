<template>
    <div class="register">
      <h2>Formulaire</h2>
      <form @submit.prevent="handleSubmit">
        <div class="input-box">
          <input type="text" id="firstname" placeholder="Firstname" v-model="firstname" required>
          <input type="text" id="lastname" placeholder="Lastname" v-model="lastname" required>
        </div>
        <div class="input-box">
          <input type="date" id="dateNaissance" v-model="birthday" required>
          <input type="text" id="pseudo" placeholder="Peudo" v-model="pseudo" required>
        </div>
        <textarea id="description" placeholder="Biographie" v-model="description" required></textarea>
        <div class="input-box">
          <div class="select">
            <label for="question">Aimez-vous Laravel ?</label>
            <select id="question" v-model="question" required>
              <option value="">&lt;-></option>
              <option value="Oui">Oui</option>
              <option value="Non">Non</option>
            </select>
          </div>
          <div class="checkVue">
            <label for="likeVueJs">Aimez-vous Vue.js?</label>
            <input type="checkbox" id="likeVueJs" v-model="likeVueJs">
          </div>
        </div>
        <div class="input-box">
          <input type="password" id="password" placeholder="Password" v-model="password" required>
          <input type="password" id="confirmPassword" placeholder="Comfirm Password" v-model="confirmPassword" required>  
        </div>
        <button class="btn" type="submit">Submit</button>
      </form>
      <!-- Modal -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <p>Prénom: {{ firstname }}</p>
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
        firstname: '',
        lastname: '',
        birthday: '',
        pseudo: '',
        description: '',
        question: '', 
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
  