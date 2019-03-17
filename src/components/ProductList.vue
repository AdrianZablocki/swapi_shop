<template>
    <div>
        <span v-if="isLoading">TODO: spinner</span> 
        <ul class="product-list">
            <product-card 
                v-for="(product, index) in products" 
                :key="index" 
                :product="product"
                :showRemoveButton="true"
                @remove-product="removeProduct(index)"
                @add-product-to-cart="addProductToCart(product)">
            </product-card>
        </ul>      
    </div>
</template>

<script>
import ProductCard from './ProductCard';

export default {
    name: 'ProductList',

    components: {
        ProductCard
    },

    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    },

    props: {
        products: Array
    },
    
    methods: {
        removeProduct(index) {
            this.$store.dispatch('deleteProduct', index);
        },

        addProductToCart(product) {
            this.$store.dispatch('addProductToCart', product);
        },
    }
}
</script>

<style scoped>
.product-list {
    padding: 0;
}
</style>
