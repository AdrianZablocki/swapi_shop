<template>
    <div class="store">
        
        <h1 class="store__header">{{ msg }}</h1>

        <add-product-form @add-new-product="addNewProduct"></add-product-form>

        <div class="store__wprapper">

            <product-list class="store__products" :products="sharedState.products"></product-list>

            <cart class="store__cart" :cart="sharedState.cart"></cart>

        </div>

    </div>
</template>

<script>
import store from "../store/store";

import ProductList from './ProductList';
import AddProductForm from './AddProductForm';
import ProductCard from './ProductCard';
import Cart from './Cart';

export default {
    name: "StoreComponent",

    components: {
        ProductList,
        AddProductForm,
        ProductCard,
        Cart
    },

    props: {
        msg: String
    },

    data() {
        return {
            sharedState: store.state
        };
    },

    created() {
        store.fetchPorducts();
    },

    methods: {
        addNewProduct(product) {
            store.addProduct(product)
        },
        
        removeProductFromCart(index) {
            store.removeProductfromCart(index);
        }
    }
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
.store__cart {
    padding-left: 10px;
}
</style>
