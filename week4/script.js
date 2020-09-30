const app = new Vue({
	el: "#app",
	data: {
		playerName: "",
		guessesDetailed: [
			{ guess: 15, result: "low" },
			{ guess: 50, result: "high" },
			{ guess: 60, result: "low" },
        ],
        guesses: [1, 2, 50, 100],
        guessCount: 0,
        guess: ""
	},
	methods: {
		submitGuess() {
            this.guesses.push(this.guess);
            this.guessCount++;
            console.log(this.guesses, this.guessCount);
        },
	},
});
