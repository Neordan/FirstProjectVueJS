<template>
  <div>
    <section class="products-group">
      <h2>{{ products.length }} produits en vente</h2>
      <section class="products">
        <router-link
          v-for="product in products"
          :key="product.id"
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          <Product
            :product="product"
            :cheapest-price="cheapestProduct.unit_price"
            :product-class="productClass"
          />
        </router-link>
      </section>
    </section>
  </div>
</template>

<script>
import { useProductStore } from '../stores/produits';
import Product from './Product.vue';
import Cart from '../views/Cart.vue';

export default {
  components: {
    Product,
    Cart
  },
  computed: {
    products() {
      return useProductStore().products;
    },
    cheapestProduct() {
      return useProductStore().cheapestProduct;
    },
    
    productClass() {
      return 'product';
    }
  }
};
</script>
