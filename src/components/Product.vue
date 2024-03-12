<template>
  <div :class="[productClass, { 'cheapest-product': product.unit_price === cheapestPrice }]">
    <div>
      <h3>{{ product.name }}</h3>
      <p class="desc" v-html="product.description"></p>
      <p class="price">Prix: {{ product.unit_price }} €</p>
      <p class="quantity">Quantité disponible: {{ product.quantity }}</p>
    </div>
    <Rating :value="product.rating" />
  </div>
</template>
  
<script>
import Rating from './Rating.vue';

export default {
  components: {
    Rating
  },
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
    },
  }
};
</script>
