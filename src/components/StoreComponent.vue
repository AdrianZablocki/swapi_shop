<template>
    <div class="store">
        
        <h1 class="store__header">{{ msg }}</h1>

        <add-product-form @add-new-product="addNewProduct"></add-product-form>

        <div class="store__wprapper">
            
            <product-list class="store__products" :products="products"></product-list>

            <cart class="store__cart" :cart="cart"></cart>

        </div>

    </div>
</template>

<script>
import AddProductForm from './AddProductForm';
import Cart from './Cart';
import ProductList from './ProductList';

export default {
    name: "StoreComponent",

    components: {
        ProductList,
        AddProductForm,
        Cart
    },

    props: {
        msg: String
    },

    created() {
        this.$store.dispatch('getProducts');
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
            this.$store.dispatch('addProduct', product);
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
