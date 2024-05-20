// src/stores/products.js
import { defineStore } from 'pinia';
import productsData from '../../data/products.json';

export const useProductStore = defineStore('products', {
  state: () => ({
    products: productsData,
    cart: [],
  }),
  getters: {
    cheapestProduct(state) {
      return state.products.reduce((cheapest, product) => {
        return product.unit_price < cheapest.unit_price ? product : cheapest;
      });
    },
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    cartSubtotal(state) {
      return state.cart.reduce((total, item) => total + (item.unit_price * item.quantity), 0);
    }
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
      this.saveCart();
    },
    updateCartQuantity(productId, quantity) {
      const item = this.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
        this.saveCart();
      }
    },
    removeFromCart(itemToRemove) {
      this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
      this.saveCart();
    },
    clearCart() {
      this.cart = [];
      localStorage.removeItem('cart');
    },
    loadCart() {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        this.cart = JSON.parse(savedCart);
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
});
