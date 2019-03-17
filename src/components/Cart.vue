<template>
    <ul>
        <product-card 
            v-for="(p, index) in cart" 
            :key="index" 
            :product="p"
            @remove-product="removeProductFromCart(index)">
        </product-card>
    </ul>     
</template>

<script>
import ProductCard from './ProductCard';

export default {
    components: {
        ProductCard
    },

    props: {
        cart: Array
    },

    methods: {
        removeProductFromCart(index) {
            this.$store.dispatch('deleteProductFromCart', index);
        }
    }
}
</script>
