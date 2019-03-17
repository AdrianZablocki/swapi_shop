import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: [],
        isLoading: true
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
            state.isLoading = false;
        },

        ADD_PRODUCT(state, product) {
            state.products.unshift(product);
        },

        DELETE_PRODUCT(state, index) {
            state.products.splice(index, 1);
        },

        ADD_PRODUCT_TO_CART(state, product) {
            state.cart.push(product);
        },

        DELETE_PRODUCT_FROM_CART(state, index) {
            state.cart.splice(index, 1);
        }
    },

    actions: {
        async getProducts({ commit }) {
            const products = await axios.get('https://swapi.co/api/people/')
                .then(response => response.data.results);
            commit('SET_PRODUCTS', products);
        },

        addProduct({ commit }, payload) {
            commit('ADD_PRODUCT', payload);
        },

        deleteProduct({ commit }, payload) {
            commit('DELETE_PRODUCT', payload);
        },

        addProductToCart({ commit }, payload) {
            commit('ADD_PRODUCT_TO_CART', payload);
        },

        deleteProductFromCart({ commit }, payload) {
            commit('DELETE_PRODUCT_FROM_CART', payload)
        }
    },

    plugins: [createLogger()]
});
