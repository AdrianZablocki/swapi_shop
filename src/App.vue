<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <store-component msg="Welcome in unique starwars characters shop!"/>
    </div>
</template>

<script>
import StoreComponent from './components/StoreComponent';

export default {
    name: "App",

    components: {
        StoreComponent
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
    padding: 0 15px;
}
</style>
