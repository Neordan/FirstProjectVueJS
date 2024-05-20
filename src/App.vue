<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<style scoped>

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
