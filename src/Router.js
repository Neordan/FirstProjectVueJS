import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Products from './components/Products.vue';
import ProductDetails from './views/ProductDetails.vue';
import Login from './views/Login.vue';
import Contact from './views/Contact.vue';
import Cart from './views/Cart.vue';


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
    component: ProductDetails
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
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
