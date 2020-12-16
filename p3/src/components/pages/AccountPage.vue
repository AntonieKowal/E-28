<template>
    <div id="account-page">
        <div v-if="user">
            <h2>Hi, {{ user.name }}!</h2>

            <div id="favorites">
                <strong>Your Favorite Posts</strong>
                <p v-if="favorites && favorites.length == 0">
                    No posts favorited yet.
                </p>
                <li v-for="(favorite, key) in favorites" v-bind:key="key">
                    {{ favorite[0].title }}
                </li>
            </div>

            <button @click="logout" data-test="logout">Logout</button>
        </div>

        <div v-else>
            <div id="loginForm" v-if="!toggleForm">
                <h2>Login</h2>
                <div>
                    <label>Email: <input type="text" v-model="data.email" data-test="email"/></label>
                </div>
                <div>
                    <label
                        >Password: <input type="password" v-model="data.password" data-test="password"
                    /></label>
                </div>

                <button @click="login" data-test="login-button">Login</button> 
                <br><br>
                <button @click="toggleForms">Register Instead By Clicking Here</button>


                <ul v-if="errors">
                    <li class="error" v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>
        
            <div id="registerForm" v-if="toggleForm">
                <h2>Register</h2>
                <div>
                    <label>Name: <input type="text" v-model="data.name" /></label>
                </div>
                <div>
                    <label>Email: <input type="text" v-model="data.email" /></label>
                </div>
                <div>
                    <label
                        >Password: <input type="password" v-model="data.password"
                    /></label>
                </div>

                <button @click="register">Register</button> 
                <br><br>
                <button @click="toggleForms" data-test="toggle-form">Login Instead By Clicking Here</button>


                <ul v-if="errors">
                    <li class="error" v-for="(error, index) in errors" :key="index">
                        {{ error }}
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
import { axios } from '@/app.js';

export default {
    data() {
        return {
            data: {
                name: '',
                email: '',
                password: '',
            },
            errors: null,
            favorites: null,
            toggleForm: true
        };
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        posts() {
            return this.$store.state.posts;
        }
    },
    methods: {
        login() {
            axios.post('login', this.data).then((response) => {
                if (response.data.authenticated) {
                    this.$store.commit('setUser', response.data.user);
                } else {
                    this.errors = response.data.errors;
                }
            });
        },
        logout() {
            axios.post('logout').then((response) => {
                if (response.data.success) {
                    this.$store.commit('setUser', null);
                }
            });
        },
        toggleForms() {
            this.toggleForm = !this.toggleForm;
        },
        register() {
            axios.post('register', this.data).then((response) => {
                if (response.data.success) {
                    console.log(response);
                    this.login();
                }
            });
            
        },
    },
    watch: {
        user() {
            if (this.user) {
                this.favorites = [];

                axios.get('favorite')
                .then((response) => {
                    this.favorites = response.data.favorite.map(
                        (favorite) => {
                            return this.$store.getters.getPostById(
                                favorite.post_id
                            );
                        }
                    );
                });
            }
        },
    }
};
</script>