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
import store from "../store/store";

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
            store.removeProductfromCart(index);
        }
    }
    
}
</script>
