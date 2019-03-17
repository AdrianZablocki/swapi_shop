<template>
    <div class="form__wrapper">

        <h3>Add something new to the store list</h3>

        <form @submit.prevent="onSubmit()">

            <div class="form__group">

                <input
                    name="product"
                    type="text"
                    class="form__input"
                    placeholder="Add new product"
                    v-model="newProduct.name"
                    v-validate="'required|min:3'">

                <button class="form__button">Add</button>  

                <div class="form__fedback">
                    <div v-show="errors.has('product')">{{ errors.first('product') }}</div>
                </div>

            </div>

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
    },

    methods: {
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }
                const product = {...this.newProduct};
                this.$emit('add-new-product', product);
                this.newProduct.name = '';
                this.$validator.reset();
            });
        }
    }
}
</script>

<style scoped>
.form__wrapper {
    text-align: center;
}
.form__group {
    position: relative;
}
.form__input {
    width: 100%;
    font-size: 16px;
    color: #2c3e50;
    padding: 15px 200px 15px 15px;
    box-sizing: border-box;
    border: 1px solid #CCC;
}
.form__button {
    position: absolute;
    width: 200px;
    padding: 15px;
    right: 0;
    top: 1px;
    font-size: 16px;
    color: #2c3e50;
    border: none;
    border-left: 1px solid #CCC;
    background: transparent;
    text-align: center;
    cursor: pointer;
}
.form__fedback {
    height: 22px;
    margin-top: 10px;
}
</style>
