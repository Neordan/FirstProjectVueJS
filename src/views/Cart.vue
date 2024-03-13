<template>
    <section class="cart">
        <h2>Panier</h2>
        <div class="remove-cart">
            <button @click="clearCart">Vider le panier</button>
        </div>
        <div v-if="cart.length === 0">
            <p>Votre panier est vide.</p>
        </div>
        <div class="cart-lines" v-else>
            <CartItem v-for="(item, index) in cart" :key="index" :item="item" @remove-from-cart="removeFromCart"/>
            <p class="subtotal">Sous-total: {{ getSubtotal() }} €</p>
        </div>
    </section>
    <section class="delivery">
        <h3>Mode de livraison :</h3>
        <select v-model="deliveryCost">
            <option value="5">Standard (+5€)</option>
            <option value="10">Express (+10€)</option>
        </select>
    </section>
    <div class="total">
        <p>Total: {{ getTotal() }} €</p>
    </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
    components: {
        CartItem
    },
    data() {
        return {
            cart: [],
            deliveryCost: 5
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
        getSubtotal() {
            // Utilisez la méthode reduce pour calculer le total du panier
            return this.cart.reduce((total, item) => total + (item.unit_price * item.quantity), 0);
        },
        getTotal() {
            return this.getSubtotal() + parseInt(this.deliveryCost);
        },
        clearCart() {
            this.cart = [];
            localStorage.removeItem('cart');
        },
        removeFromCart(itemToRemove) {
            this.cart = this.cart.filter(item => item !== itemToRemove);
            localStorage.setItem('cart', JSON.stringify(this.cart));
        },
        
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
