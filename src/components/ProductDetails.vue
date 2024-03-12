<template>
    <div class="product-info">
      <h1>{{ product.name }}</h1>
      <p class="desc">{{ product.description }}</p>
      <p class="price">Prix: {{ product.unit_price }} €</p>
      <p class="quantity">Quantité disponible: {{ product.quantity }}</p>
  

      <div class="similar-group">
        <h3>Produits similaires</h3>
        <div class="similar-link">
            <router-link v-for="similarProduct in similarProducts" :key="similarProduct.id" :to="{ name: 'similarProductDetails', params: { id: similarProduct.id }}">
                {{ similarProduct.name }}
            </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import productsData from '../../data/products.json';
  
  export default {
    data() {
      return {
        product: {},
        similarProducts: {}
      };
    },
    methods: {
      getSimilarProducts(products, currentProduct) {
        // Exclusion du produit actuel
        return products.filter(product => product.id !== currentProduct.id).slice(0, 3);
      }
    },
    mounted() {
      // Récupérer l'identifiant du produit à partir de l'URL
      const productId = parseInt(this.$route.params.id);
      // Rechercher le produit correspondant dans les données de produits
      this.product = productsData.find(product => product.id === productId);

      this.similarProducts = this.getSimilarProducts(productsData, this.product);
    },
  }
  </script>
  