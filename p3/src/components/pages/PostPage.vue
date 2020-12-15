<template>
    <div>
        <h1>Post # {{id}}</h1>
        <show-post :post="post[0]" :extra-info="true">{{post}}</show-post>
        <br>
        <router-link to="/posts"><h3>back to all posts</h3></router-link>
    </div>
</template>

<script>
import ShowPost from '@/components/ShowPost.vue';

export default {
    name: '',
    props: ['id'],
    components: {
        'show-post': ShowPost
    },
    data() {
        return {
        }
    },
    computed: {
        posts() {
            return this.$store.state.posts;
        },
        post() {
            // return this.posts.filter((post) => {
            //     return post.id == this.id;
            // }, this.id[0]);  
            return this.$store.getters.getPostById(this.id);
        },
        
    },
    mounted() {
    },
}
</script>

<style scoped>

</style>