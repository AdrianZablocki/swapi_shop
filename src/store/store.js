import axios from 'axios'

const store = {
    state: {
        products: [],
        cart: []
    },

    async fetchPorducts() {
        this.state.products = await axios.get('https://swapi.co/api/people/').then(res => res.data.results);
    },

    deleteProduct(index) {
        this.state.products.splice(index, 1);
    },

    addProduct(product) {
        this.state.cart.push(product);
    }
}

export default store;