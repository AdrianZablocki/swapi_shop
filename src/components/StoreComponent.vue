<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <product-list :products="sharedState.products"></product-list>
  </div>
</template>

<script>
import store from '../store/store';

import ProductCard from './ProductCard';
import ProductList from './ProductList';

export default {
  name: 'StoreComponent',

  components: {
    ProductCard,
    ProductList
  },

  props: {
    msg: String
  },

  created() {
    store.fetchPorducts();
  },

  mounted() {
    console.log(this.sharedState);
  },

  data() {
    return {
      sharedState: store.state
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
