<template>
    <div>
        <ul class="product-list">
            <product-card 
                v-for="(p, $idx) in products" 
                :key="$idx" 
                :product="p"
                @remove-product="removeProduct"
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
        }
    }
}
</script>

<style scoped>
.product-list {
    padding: 0;
}
</style>
