<template>
    <div class="store">
        
        <h1 class="store__header">{{ msg }}</h1>

        <add-product-form @add-new-product="addNewProduct"></add-product-form>

        <div class="store__wprapper">

            <!-- <product-list class="store__products" :products="sharedState.products"></product-list> -->
            
            <product-list class="store__products" :products="products"></product-list>

            <cart class="store__cart" :cart="cart"></cart>

        </div>

    </div>
</template>

<script>
import store from "../../store";

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

    created() {
        // store.fetchPorducts();
        this.$store.dispatch('getProducts');

        console.log(this.cart)
    },

    computed: {
        products() {
            return this.$store.state.products;
        },
        cart() {
            return this.$store.state.cart;
        }
    },

    methods: {
        addNewProduct(product) {
            // eslint-disable-next-line
            console.log(product);
            this.$store.dispatch('addProduct', product);
        },
        
        //TODO: change for vuex
        // removeProductFromCart(index) {
        //     store.removeProductfromCart(index);
        // }
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
