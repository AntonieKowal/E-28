Vue.component("round-detail", {
	data: function () {
		return {
			deleted: false,
		};
	},
	template: `
    <div v-if="!deleted">
        <ul>
            <li> Round #: {{number}}</li>
            <li> Winner: {{winner}}</li>
            <li><slot name="coin"></slot></li>
            <li><slot name="choice"></slot></li>
        </ul>
        <button @click="$emit('delete-round', number)">Delete</button>
    </div>
    `,
	props: {
		number: {
			type: Number,
			default: 0,
		},
		winner: String,
	},
	methods: {
		deleteRound: function () {
			this.deleted = true;
		},
	},
});


const app = new Vue({
	el: "#app",
	data: {
		rounds: [
			{ number: 1, winner: "Player", coin: "heads", choice: "heads" },
			{ number: 2, winner: "Player", coin: "tails", choice: "tails" },
			{ number: 3, winner: "Computer", coin: "heads", choice: "tails" },
		],
	},
	methods: {
		deleteRound(number) {
			console.log("Deleted round " + number + " from the component.");
			function isMatchingRound(round) {
				return round.number != this;
			}
			this.rounds = this.rounds.filter(isMatchingRound, number);
		},
	},
	computed: {},
	mounted: function () {},
});
