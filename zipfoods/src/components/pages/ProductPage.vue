<template>
    <div>
        <h1>Show product ID {{id}}</h1>
        <show-product :product="product[0]">{{product}}</show-product>
    </div>
</template>

<script>
import ShowProduct from '@/components/ShowProduct.vue';

export default {
    name: '',
    props: ['id', 'products'],
    components: {
        'show-product': ShowProduct
    },
    data() {
        return {
        }
    },
    computed: {
        product() {
            return this.products.filter((product) => {
                return product.id == this.id;
            }, this.id[0]);  
        }
    },
    mounted() {
    },
}
</script>

<style scoped>

</style>