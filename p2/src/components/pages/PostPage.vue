<template>
    <div>
        <h1>Post # {{id}}</h1>
        <show-post :post="post[0]" :extra-info="true">{{post}}</show-post>
    </div>
</template>

<script>
import ShowPost from '@/components/ShowPost.vue';

export default {
    name: '',
    props: ['id', 'posts'],
    components: {
        'show-post': ShowPost
    },
    data() {
        return {
        }
    },
    computed: {
        post() {
            return this.posts.filter((post) => {
                return post.id == this.id;
            }, this.id[0]);  
        }
    },
    mounted() {
    },
}
</script>

<style scoped>

</style>