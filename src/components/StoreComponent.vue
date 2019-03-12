<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <add-product-form></add-product-form>
        <product-list :products="sharedState.products"></product-list>
    </div>
</template>

<script>
import store from "../store/store";

import ProductCard from './ProductCard';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm'

export default {
    name: "StoreComponent",

    components: {
        ProductCard,
        ProductList,
        AddProductForm
    },

    props: {
        msg: String
    },

    data() {
        return {
            sharedState: store.state
        };
    },

    beforeCreated() {
        console.log('before created', this.sharedState);
    },

    created() {
        store.fetchPorducts();
        console.log('created', this.sharedState);
    },

    beforeMount() {
        console.log('before mounted', this.sharedState);
    },

    mounted() {
        console.log('mounted', this.sharedState);
    },

    beforeUpdate() {
        console.log('before update', this.sharedState);
    },

    updated() {
        console.log('updated', this.sharedState);
    },

    beforeDestroy() {
        console.log('before Destroy', this.sharedState);
    },

    destroyed() {
        console.log('Destroyed', this.sharedState);
    },
};
</script>

<style scoped>
</style>
