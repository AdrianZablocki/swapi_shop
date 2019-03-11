<template>
    <ul>
        <product-card v-for="(p, $idx) in products" :key="$idx" :product="p"></product-card>
    </ul>
</template>

<script>
import ProductCard from './ProductCard'
export default {
    name: 'ProductList',

    components: {
        ProductCard
    },

    props: {
        products: Array
    }
}
</script>

<style scoped>

</style>
