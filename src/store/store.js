import axios from 'axios'

const store = {
    state: {
        products: [],
        cart: [],
        isLoading: false
    },

    async fetchPorducts() {
        this.state.isLoading = true;
        await axios.get('https://swapi.co/api/people/').then(res => {
            this.state.products = res.data.results;
            this.state.isLoading = false;
        });
    },

    addProduct(product) {
        this.state.products.push(product);
    },

    deleteProduct(index) {
        this.state.products.splice(index, 1);
    },

    addProductToCart(product) {
        this.state.cart.push(product);
    }
}

export default store;