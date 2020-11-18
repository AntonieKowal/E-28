<template>
    <div>
        <h3 class="post">{{ post.title }}</h3>

        <p class="post">{{ post.post }}</p>

        <ul v-if="post.categories && extraInfo">
            <strong>Topics:</strong>
            <li v-for="category in post.categories.split(',')" :key="category.id"> 
                {{category}}
            </li>
        </ul>

        <div v-if="extraInfo">
            Posted on {{timestamp}}
        </div>

        
    </div>
    
</template>
<script>


export default {
    name: 'showPost',
    props: ['post', 'extraInfo'],
    data: function () {
        return {
            timestamp: "",
        };
    },
    mounted() {
        this.timestamp = new Date(this.post.created_at);
    },
    computed: {
    }
};

</script>

<style scoped>
    .post {
        text-decoration: none;
    }
</style>