<template>
    <section class="cart">
      <h2>Panier</h2>
      <div class="remove-cart">
        <button @click="clearCart">Vider le panier</button>
      </div>
      <div v-if="cart.length === 0">
        <p>Votre panier est vide.</p>
      </div>
      <div class="cart-lines" v-else>
        <CartItem v-for="(item, index) in cart" :key="index" :item="item" @remove-from-cart="removeFromCart" />
        <p class="subtotal">Sous-total: {{ getSubtotal }} €</p>
      </div>
    </section>
    <section class="delivery" v-if="cart.length > 0">
      <h3>Mode de livraison :</h3>
      <select v-model="deliveryCost">
        <option value="5">Standard (+5€)</option>
        <option value="10">Express (+10€)</option>
      </select>
    </section>
    <div class="total">
      <p>Total: {{ getTotal }} €</p>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/produits';
  import CartItem from '../components/CartItem.vue';
  
  export default {
    components: {
      CartItem
    },
    data() {
      return {
        deliveryCost: 5
      };
    },
    computed: {
      cart() {
        const store = useProductStore();
        store.loadCart();
        return store.cart;
      },
      getSubtotal() {
        return useProductStore().cartSubtotal;
      },
      getTotal() {
        return this.cart.length === 0 ? 0 : this.getSubtotal + parseInt(this.deliveryCost);
      }
    },
    methods: {
      clearCart() {
        useProductStore().clearCart();
      },
      removeFromCart(item) {
        useProductStore().removeFromCart(item);
      }
    }
  };
  </script>
  