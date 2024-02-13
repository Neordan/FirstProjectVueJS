<!-- Products.vue -->

<template>
  <section>
    <h2>{{ products.length }} produits en vente</h2>
    <section class="products">
      <Product v-for="product in products" :key="product.id" :product="product" :cheapest-price="cheapestProducts" :product-class="productClass" />
    </section>
  </section>
</template>
<script>
import Product from './Product.vue';
import productsData from '../../data/products.json';

export default {
  components: {
    Product
  },
  data() {
    return {
      products: productsData,
      productClass: 'product'
    };
  },
  computed: {
    cheapestProducts() {
        return this.products.toSorted(function(a, b) {
          return a.unit_price - b.unit_price;
        })[0].unit_price;
    }
  }
};
</script>
