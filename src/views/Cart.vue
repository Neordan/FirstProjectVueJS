<template>
    <section class="cart">
        <h2>Panier</h2>
        <div v-if="cart.length === 0">
            <p>Votre panier est vide.</p>
        </div>
        <div class="cart-lines" v-else>
            <CartItem v-for="(item, index) in cart" :key="index" :item="item" @remove-from-cart="removeFromCart"/>
            <p>Total: {{ getTotal() }} €</p>
            <button @click="clearCart">Vider le panier</button>
        </div>
    </section>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
    components: {
        CartItem
    },
    data() {
        return {
            cart: []
        };
    },
    created() {
        // Charger le panier depuis le stockage local lors de la création du composant
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.cart = JSON.parse(savedCart);
        }
    },
    methods: {
        getTotal() {
            // Utilisez la méthode reduce pour calculer le total du panier
            return this.cart.reduce((total, item) => total + (item.unit_price * item.quantity), 0);
        },
        clearCart() {
            this.cart = [];
            localStorage.removeItem('cart');
        },
        removeFromCart(itemToRemove) {
            this.cart = this.cart.filter(item => item !== itemToRemove);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    },
    watch: {
        cart: {
            handler(newCart) {
                localStorage.setItem('cart', JSON.stringify(newCart));
            },
            deep: true
        }
    }
};
</script>
