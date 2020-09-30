// const app = new Vue({
//     el: "#app",
//     data: {
//         playerName: "",
//         guesses: [],
//         guess: null
//     },
//     methods: {
//         doSomething(guess) {
//             this.guesses.push(guess)
//         }
//     }
// });

const app = Vue.createApp({
    data() {
        return {
            playerName: "",
            guesses: [],
            guess: null
		};
    }
}).mount('#app');

