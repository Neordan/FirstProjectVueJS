
<!-- header -->

<template>
  <header>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'products' }">Products</router-link></li>
          <img class="logo" src="../assets/img/logo2.png" alt="Vue Mastery" />
          <li><router-link :to="{ name: 'login' }">Connexion</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
  </header>
</template>
