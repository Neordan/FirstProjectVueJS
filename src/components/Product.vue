<template>
  <div :class="[productClass]">
    <section class="card">
    <div>
      <transition name="fade">
        <div v-if="showConfirmation" class="confirmation">Produit ajouté au panier!</div>
      </transition>
      <img :src="product.image" alt="Product Image">
      <h3 class="title">{{ product.name }}</h3>
      <p class="desc" v-html="product.description"></p>
      <p class="price">{{ product.unit_price }} €</p>
      <p class="quantity">Quantité disponible: {{ product.quantity }}</p>
    </div>
    <h3 class="title-bis">{{ product.name }}</h3>
    <Rating :value="product.rating" />
    <p class="price-bis">{{ product.unit_price }} €</p>
  </section>
    <button @click="addToCart(product)">Ajouter au panier</button>
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
  },
  data() {
    return {
      cart: [],
      showConfirmation: false 
    };
  },
  created() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
    }
  },
  methods: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
        
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.showConfirmation = true; 
      setTimeout(() => {
        this.showConfirmation = false; 
      }, 10000); 
    }
  }
};
</script>


