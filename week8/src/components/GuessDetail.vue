<template>
<div class="rowDetail">
    <div v-if="status != 'winner'">You guessed <strong>{{guess}}</strong>, the correct number is <strong style="text-transform: uppercase">{{status}}</strong>!</div>
    <h3 v-else>You got the correct number {{guess}}! you won in {{guessCount}} guesses</h3>
</div>
</template>

<script>
export default {
    props: ['guess', 'status', 'guessCount'],
    methods: {},
    computed: {
        
    }
}
</script>

<style>
.rowDetail {
    margin-bottom: 10px;
    padding: 5px;
}
</style>