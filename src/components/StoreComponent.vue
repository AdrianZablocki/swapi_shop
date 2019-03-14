<template>
    <div class="store">
        <h1 class="store__header">{{ msg }}</h1>
        <add-product-form></add-product-form>

        <div class="store__wprapper">
            <product-list class="store__products" :products="sharedState.products"></product-list>


            <!-- TODO: create component for cart -->
            <ul class="store__cart">
                <product-card 
                    v-for="(p, index) in sharedState.cart" 
                    :key="index" 
                    :product="p">
                </product-card>
            </ul> 
        </div>

    </div>
</template>

<script>
import store from "../store/store";

import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';

export default {
    name: "StoreComponent",

    components: {
        ProductList,
        AddProductForm,
        ProductCard
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
        // console.log('before created', this.sharedState);
    },

    created() {
        store.fetchPorducts();
        // console.log('created', this.sharedState);
    },

    beforeMount() {
        // console.log('before mounted', this.sharedState);
    },

    mounted() {
        // console.log('mounted', this.sharedState);
    },

    beforeUpdate() {
        // console.log('before update', this.sharedState);
    },

    updated() {
        // console.log('updated', this.sharedState);
    },

    beforeDestroy() {
        // console.log('before Destroy', this.sharedState);
    },

    destroyed() {
        // console.log('Destroyed', this.sharedState);
    },
};
</script>

<style scoped>
.store__header {
    text-align: center;
}
.store__wprapper {
    display: flex;
}
.store__products,
.store__cart {
    flex: 1 1 50%;
}
</style>
