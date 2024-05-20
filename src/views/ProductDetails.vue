<template>
  <div class="product-info">
    <Product :product="product" :productClass="productClass"/>

    <div class="similar-group" v-if="similarProducts.length > 0">
      <h4>Produits similaires</h4>
      <div class="similar-link">
        <router-link v-for="similarProduct in similarProducts" :key="similarProduct.id" :to="{ name: 'productDetails', params: { id: similarProduct.id }}">
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
      similarProducts: [],
      productClass: 'product',
    };
  },
  methods: {
    // Exclure le produit actuel et limiter à 3 produits
    getSimilarProducts(products, currentProduct) {
      return products.filter(product => product.id !== currentProduct.id).slice(0, 3);
    },
    loadProductData(productId) {
      this.product = productsData.find(product => product.id === parseInt(productId));
      // Obtenir objet des produits similaires à partir de l'id
      this.similarProducts = this.getSimilarProducts(productsData, this.product);
    }
  },
  watch: {
    '$route.params.id'(newId) {
      // Charger les données du nouveau produit lorsque l'ID change
      this.loadProductData(newId);
    }
  },
  mounted() {
    // Charger les données du produit lors du montage initial
    const productId = parseInt(this.$route.params.id);
    this.loadProductData(productId);
  }
};
</script>
