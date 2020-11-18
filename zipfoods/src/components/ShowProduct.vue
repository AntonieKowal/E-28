<template>
    <div class="product">
        <div class="product-name">{{ product.name }}</div>
        <img
            class="product-thumb"
            :src="imageSrc"
        />
        <p class="product-description">{{ product.description }}</p>
        <div class="product-price">${{ product.price }}</div>
    </div>
</template>
<script>


export default {
    name: 'showProduct',
    props: ['product'],
    data: function () {
        return {};
    },
    computed: {
        imageSrc() {
            try {
                return require('@/assets/images/products/' + this.product.id + '.jpg');
            } catch(e) {
                return require('@/assets/images/products/image-not-available.jpg')
            }
        }
    },
};

</script>

<style scoped>

</style>