<template>
  <section class="line">
    <p>{{ item.name }}</p>
    <div class="quantity">
      <button @click="decrementQuantity">-</button>
      <input type="text" v-model.number="item.quantity" @change="updateQuantity(item.quantity)">
      <button @click="incrementQuantity">+</button>
    </div>
    <p>{{ item.unit_price * item.quantity }} €</p>
    <box-icon name="x" color="#651616" @click="removeCard"></box-icon>
  </section>
</template>

<script>
import { useProductStore } from '../stores/produits.js';

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    incrementQuantity() {
      this.item.quantity++;
      this.updateQuantity(this.item.quantity);
    },
    decrementQuantity() {
      if (this.item.quantity > 1) {
        this.item.quantity--;
        this.updateQuantity(this.item.quantity);
      }
    },
    updateQuantity(quantity) {
      const store = useProductStore();
      store.updateCartQuantity(this.item.id, quantity);
    },
    removeCard() {
      this.$emit('remove-from-cart', this.item);
    }
  }
};
</script>