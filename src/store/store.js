import axios from 'axios'

import CHARACTERS from '../config/characters-config';

const store = {
    state: {
        products: [],
        cart: [],
        characters: CHARACTERS
    },

    async fetchPorducts() {
        this.state.products = await axios.get('https://swapi.co/api/people/').then(res => res.data.results);
    }
}

export default store;