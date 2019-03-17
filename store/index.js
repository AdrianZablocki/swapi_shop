import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products: [],
        cart: []
    },

    mutations: {
        SET_PRODUCTS(state, products) {
            state.products = products;
        },

        ADD_PRODUCT(state, product) {
            state.products.push(product);
        },

        ADD_PRODUCT_TO_CART(state, product) {
            state.cart.push(product);
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

        addProductToCart({ commit }, payload) {
            commit('ADD_PRODUCT_TO_CART', payload)
        }
    },

    plugins: [createLogger()]
});




// import axios from 'axios'

// const store = {
//     state: {
//         products: [],
//         cart: [],
//         isLoading: false
//     },

//     async fetchPorducts() {
//         this.state.isLoading = true;
//         await axios.get('https://swapi.co/api/people/').then(res => {
//             // eslint-disable-next-line
//             console.log(res);
//             this.state.products = res.data.results;
//             this.state.isLoading = false;
//         });
//     },

//     addProduct(product) {
//         this.state.products.push(product);
//     },

//     deleteProduct(index) {
//         this.state.products.splice(index, 1);
//     },

//     addProductToCart(product) {
//         this.state.cart.push(product);
//     },

//     removeProductfromCart(index) {
//         this.state.cart.splice(index, 1);
//     } 
// }

// export default store;