import axios from 'axios'

const store = {
    state: {
        products: [],
        cart: []
    },

    async fetchPorducts() {
        this.state.products = await axios.get('https://swapi.co/api/people/').then(res => res.data.results);
    }
}

export default store;