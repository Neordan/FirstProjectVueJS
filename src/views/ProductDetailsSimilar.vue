<template>
    <div class="product-info">
      <Product :product="product" :productClass="productClass" />
    </div>
  </template>
  
  <script>
  import Product from '../components/Product.vue';
  import productsData from '../../data/products.json';
  
  export default {
    components: {
      Product
    },
    data() {
      return {
        product: {},
        productClass: 'product'
      };
    },
    mounted() {
      const productId = parseInt(this.$route.params.id);
      // Rechercher le produit correspondant
      this.product = productsData.find(product => product.id === productId);
    }
  };
  </script>
  