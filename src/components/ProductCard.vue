<template>
    <li class="product-card">
        {{ product.name }}
        <div class="porduct-card__wrapper">
            <button class="product-card__button" v-on:click="onRemoveProduct">remove</button>
            <button class="product-card__button" v-on:click="onAddProductToCart">add to cart</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ProductCard',

    props: {
        product: {
            type: Object
        },
        index: {
            type: Number
        }
    },

    methods: {
        onRemoveProduct() {
            this.$emit('remove-product');
        },

        onAddProductToCart() {
            this.$emit('add-product');
        }
    }
}
</script>

<style scoped>
.product-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #CCC;
    margin-bottom: 5px;
    padding: 5px 5px 5px 15px;
}
.porduct-card__wrapper {
    display: flex;
    flex-direction: column;
}
.product-card__button {
    margin: 2px;
    border: 1px solid #CCC;
    cursor: pointer;
}
</style>
