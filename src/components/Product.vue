<template>
  <div :class="[{ 'cheapest-product': product.unit_price === cheapestPrice }, productClass]">
    <div>
      <h3>{{ product.name }}</h3>
      <p v-html="product.description"></p>
      <p>Prix unitaire: {{ product.unit_price }} €</p>
      <p>Quantité disponible: {{ product.quantity }}</p>
    </div>
      <Rating :value="product.rating" />
    </div>
  </template>
  
  <script>
  import Rating from './Rating.vue';
  
  export default {
    props: {
      product: {
        type: Object,
        required: true
      },
      cheapestPrice: {
        type: Number,
        required: true
      },
      productClass: {
        type: String
      }
    },
    components: {
      Rating
    }
  };
  </script>
  