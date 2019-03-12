<template>
    <div class="form-wrapper">
        <h3>Add something new to the store list</h3>
        <form @submit.prevent="onSubmit()">
            <input
                name="product"
                type="text"
                v-model="newProduct.name"
                v-validate="'required|min:3'"
            >

            <button>Add</button>

            <div v-show="errors.has('product')">{{ errors.first('product') }}</div>

        </form>
    </div>
</template>

<script>
export default {
    name: 'AddProductForm',

    data() {
        return {
            newProduct: {
                name: ''
            }
        }
    }
}
</script>

<style scoped>
.form-wrapper {
    text-align: center;
}
</style>
