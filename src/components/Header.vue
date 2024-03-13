<template>
  <header>
      <nav>
        <ul>
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li><router-link :to="{ name: 'products' }">Products</router-link></li>
          <img class="logo" src="../assets/img/logo2.png" alt="Vue Mastery" />
          <li>
            <router-link :to="{ name: 'cart' }">
              <box-icon name='basket' color='#575757'></box-icon>
              <!-- Bulle pour afficher le nombre d'articles dans le panier -->
              <div class="cart-badge" v-if="cartItemCount > 0">{{ cartItemCount }}</div>
            </router-link>
          </li>
          <li><router-link :to="{ name: 'login' }">Connexion</router-link></li>
          <!-- <li><router-link :to="{ name: 'contact' }">Contact</router-link></li> -->
        </ul>
      </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: 0
    };
  },
  created() {
    // Charger le nombre d'articles dans le panier depuis le stockage local lors de la création du composant
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const cart = JSON.parse(savedCart);
      this.cartItemCount = cart.length;
      
    }
  },
  watch: {
    // Surveiller les changements du panier et mettre à jour le nombre d'articles dans le panier
    cart: {
      handler(newCart) {
        this.cartItemCount = newCart.length;
      },
      deep: true
    }
  }
};
</script>