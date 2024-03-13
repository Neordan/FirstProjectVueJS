<template>
  <div>
    <section>
      <h2>{{ products.length }} produits en vente</h2>
      <section class="products">
        <router-link v-for="product in products" :key="product.id" :to="{ name: 'productDetails', params: { id: product.id }}">
          <Product :product="product" :cheapest-price="cheapestProducts" :product-class="productClass" />
        </router-link>
      </section>
    </section>
    <Cart :cart="cart" />
  </div>
</template>

<script>
import Product from './Product.vue';
import productsData from '../../data/products.json';

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: productsData,
      productClass: 'product',
    };
  },
  computed: {
    cheapestProducts() {
      return this.products.toSorted((a, b) => a.unit_price - b.unit_price)[0].unit_price;
    }
  },
};
</script>
