<template>
  <div class="home">
    <section class="presentation">
      <div class="title">
          <h1>
              <span>Rugged</span>Elegance
          </h1>
          <h2>Strength and Style, Woven in Elegance</h2>
      </div>
    </section>
    <section class="new-collection">
      <img src="../assets/img/new.png"
            alt="Photo d'un homme tatoué dans un fond sombre pour la nouveauté des bijoux">
      <div class="collection-description">
          <div class="collection-title">
              <h3>Collection Avril 2024</h3>
              <p>Nouveauté bientôt</p>
          </div>
          <div class="collection-btn">
            <button>Découvrir</button>
          </div>
      </div>
    </section>
    <section class="fav">
      <h2>Nos produits vedettes</h2>
      <section class="fav-products">
        <router-link v-for="product in favProducts" :key="product.id" :to="{ name: 'productDetails', params: { id: product.id }}">
          <Product :product="product" :product-class="productClass" />
        </router-link>
      </section>
    </section>
    <section class="avis">
      <h2>Ce que disent nos clients</h2>
      <div class="img"></div>
    </section>
  </div>
</template>

<script>
import ProductData from '../../data/products.json';
import Product from '../components/Product.vue';

export default {
  data() {
    return {
      products: ProductData,
      productClass: 'product'
    };
  },
  components: {
    Product
  },
  computed: {
    favProducts() {
      return this.products.filter(product => product.rating > 4);
    }
  }
}
</script>
