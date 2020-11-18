<template>
    <div>

        <div id="form">
            <h2>Add a New Post!</h2>

            <label for="author">Author*</label>
            <input type="text" v-model="post.author" id="author" />

            <label for="title">Title*</label>
            <input type="text" v-model="post.title" id="title" />

            <label for="post">Post*</label>
            <textarea v-model="post.post" id="post"></textarea>

            <strong>Category</strong>
            <div>
                <label for="sports">
                    <input
                        type="radio"
                        v-model="post.categories"
                        id="sports"
                        value="sports"
                    />
                    Sports
                </label>

                <label for="coding">
                    <input
                        type="radio"
                        v-model="post.categories"
                        id="coding"
                        value="coding"
                    />
                    Coding
                </label>

                <label for="music">
                    <input
                        type="radio"
                        v-model="post.categories"
                        id="music"
                        value="music"
                    />
                    Music
                </label>
            </div>
            

        <button @click="addPost">Submit Post</button>

        
        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    data() {
        return {
            post: {
                title: "",
                author: "",
                post: "",
                categories: []
            },
            errors: null,
        };
    },
    methods: {
        addPost() {
            // this.post.categories = this.post.categories.join(",");
            axios.post('/post', this.post).then((response) => {
                console.log(response.data);

                if (response.data.errors != null) {
                    this.errors = response.data.errors
                    alert("submission failed. Please fill out every field!");
                } else {
                    this.$emit('update-posts');
                    alert("post successfully sent")
                }

            })
        },
    },
};
</script>

<style scoped>
#form {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#form input, #form button, #form textarea {
    margin-bottom: 10px;
    min-width: 50%;
}

#form textarea {
    height: 200px;
}

</style>