<template>
    <div>
        <span v-if="isLoading()">TODO: spinner</span> 
        <ul class="product-list">
            <product-card 
                v-for="(p, index) in products" 
                :key="index" 
                :product="p"
                :showRemoveButton="true"
                @remove-product="removeProduct(index)"
                @add-product-to-cart="addProductToCart(p)">
            </product-card>
        </ul>      
    </div>
</template>

<script>
import ProductCard from './ProductCard';
import store from '../../store';

export default {
    name: 'ProductList',

    components: {
        ProductCard
    },

    props: {
        products: Array
    },
    
    methods: {
        removeProduct(index) {
            store.deleteProduct(index);
        },

        addProductToCart(product) {
            // store.addProductToCart(product);
            this.$store.dispatch('addProductToCart', product);
        },

        isLoading() {
            return store.state.isLoading;
        }
    }
}
</script>

<style scoped>
.product-list {
    padding: 0;
}
</style>
