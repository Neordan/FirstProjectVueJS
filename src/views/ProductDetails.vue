<template>
  <div class="product-info">

    <Product :product="product" :productClass="productClass"/>

    <div class="similar-group">
      <h4>Produits similaires</h4>
      <div class="similar-link">

        <router-link v-for="similarProduct in similarProducts" :key="similarProduct.id" :to="{ name: 'similarProductDetails', params: { id: similarProduct.id }}">

          <Product :product="similarProduct" :productClass="productClass" />

        </router-link>
      </div>
    </div>
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
      similarProducts: {},
      productClass: 'product',
    };
  },
  methods: {
    getSimilarProducts(products, currentProduct) {
      // Exclure le produit actuel et limiter à 3 produits
      return products.filter(product => product.id !== currentProduct.id).slice(0, 3);
    }
  },
  mounted() {
    // Récupérer l'identifiant du produit à partir de l'URL
    const productId = parseInt(this.$route.params.id);
    
    this.product = productsData.find(product => product.id === productId);
    // Obtenir les produits similaires
    this.similarProducts = this.getSimilarProducts(productsData, this.product);
  }
};
</script>
