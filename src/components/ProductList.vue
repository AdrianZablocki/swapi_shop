<template>
    <div>
        <ul class="product-list">
            <product-card 
                v-for="(p, index) in products" 
                :key="index" 
                :product="p"
                @remove-product="removeProduct(index)"
                @add-product="addProduct(p)"
            ></product-card>
        </ul> 
        <span v-if="!products.length">TODO: spinner</span>       
    </div>
</template>

<script>
import ProductCard from './ProductCard';
import store from '../store/store';

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

        addProduct(product) {
            store.addProduct(product);
        }
    }
}
</script>

<style scoped>
.product-list {
    padding: 0;
}
</style>
