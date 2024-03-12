import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Products from './components/Products.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/Login.vue';
import Contact from './components/Contact.vue';
import ProductDetailsSimilar from './components/ProductDetailsSimilar.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products
  },
  {
    path: '/product/:id',
    name: 'productDetails',
    component: ProductDetails,
    props: true
  },
{
  path: '/similar-product/:id',
  name: 'similarProductDetails',
  component: ProductDetailsSimilar
},
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'home' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
