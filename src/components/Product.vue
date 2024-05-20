<template>
  <div :class="[productClass]">
    <section :class="['card', { 'cheapest-price': product.unit_price === cheapestPrice }]">
      <div>
        <img :src="product.image_bis" :class="imageClass" alt="Product Image">
        <h3 class="title">{{ product.name }}</h3>
        <p class="desc" v-html="product.description"></p>
        <p class="price">{{ product.unit_price }} €</p>
        <p class="quantity">Quantité disponible: {{ product.quantity }}</p>
      </div>
    </section>
    <button @click="addToCart(product)">Ajouter au panier
      <transition name="fade">
      <div v-if="showConfirmation" class="confirmation">Produit ajouté au panier!</div>
    </transition></button>
   
  </div>
</template>

<script>
import { useProductStore } from '../stores/produits';
import { useRoute } from 'vue-router';

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
  data() {
    return {
      showConfirmation: false
    };
  },
  computed: {
    imageClass() {
      const route = useRoute();
      return route.name === 'productDetails' ? 'img-bis' : 'img-full';
    }
  },
  methods: {
    addToCart(product) {
      const store = useProductStore();
      store.addToCart(product);
      this.showConfirmation = true;
      setTimeout(() => {
        this.showConfirmation = false;
      }, 10000);
    }
  }
};
</script>
