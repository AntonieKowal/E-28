Vue.component("guess-detail", {
	data: function () {
		return {
		};
	},
	template: `
    <div class="rowDetail">
        <div v-if="status != 'winner'">You guessed <strong>{{guess}}</strong>, the correct number is <strong style="text-transform: uppercase">{{status}}</strong>!</div>
        <h3 v-else>You got the correct number {{guess}}! you won in {{guessCount}} guesses</h3>
    </div>
    `,
	props: ['guess', 'status', 'guessCount'],
	methods: {},
});

Vue.component("round-detail", {
	data: function () {
		return {};
	},
	template: `
    <div class="rowDetail" :class="{worstScore: $root.worstGuess === round.guessCount && $root.rounds.length > 1, bestScore: $root.bestGuess === round.guessCount}">
        Round {{index + 1}}: Correct number <strong>{{round.targetNumber}}</strong> guessed in <strong>{{round.guessCount}}</strong> guesses
    </div>
    `,
	props: ["round", "index"],
	methods: {},
});

const app = new Vue({
	el: "#app",
	data: {
		rounds: [],
		gameState: 0,
		guess: null,
		guesses: [],
		guessCount: 0,
		targetNumber: Math.ceil(Math.random() * 100),
		bestGuess: null,
		worstGuess: null,
	},
	mounted: function () {},
	methods: {
		playerGuess(guess) {
			let status = "";
			this.guessCount++;

			if (guess > this.targetNumber) {
				status = "lower";
			} else if (guess < this.targetNumber) {
				status = "higher";
			} else if (guess == this.targetNumber) {
				status = "winner";
				this.gameState = 1;
				this.rounds.push({
					guessCount: this.guessCount,
					targetNumber: this.targetNumber,
				});

				if (this.guessCount < this.bestGuess || this.bestGuess == null) {
					this.bestGuess = this.guessCount;
				}

				if (this.guessCount > this.worstGuess ||this.worstGuess == null) {
					this.worstGuess = this.guessCount;
				}
			}

			this.guesses.push({ status: status, guess: guess });
			this.guess = null;
		},
		resetGame() {
			this.gameState = 0;
			this.guesses = [];
			this.targetNumber = Math.ceil(Math.random() * 100);
			this.guessCount = 0;
		},
		resetHistory() {
            this.resetGame();
            this.rounds = [];
            this.bestGuess = null;
            this.worstGuess = null;
		},
	},
	computed: {},
});
