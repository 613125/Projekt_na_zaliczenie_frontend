<script setup>
import { useGameStore } from '../stores/GameStore'
import { ref } from 'vue'

const game_store = useGameStore()

const game_input = ref({
	title: '',
	category: null
})

const sort = ref(false)

const AddGame = () => {
	if (!game_input.value.title.trim() ) {
		return alert("Podaj tytuł gry")
	}
	game_store.addGame(game_input.value)

	game_input.value = {
		title: '',
		category: null
	}
}

const RemoveGame = () => {
	game_store.removeGame()

}

const ToggleCompleted = () => {
    game_store.toggleCompleted()
}

</script>

<template>
	<main>
		<h1>GROTEKA</h1>
		<form @submit.prevent="AddGame">
			<input 
				type="text"
				placeholder="Scythe"
				v-model="game_input.title"  />
				<h4>Wybierz kategorię</h4>
				<div class="options">

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category1" 
							value="Planszowa"
							v-model="game_input.category" />
						<span class="bubble planszowa"></span>
						<div>Planszowa</div>
					</label>

					<label>
						<input 
							type="radio" 
							name="category" 
							id="category2" 
							value="Komputerowa"
							v-model="game_input.category" />
						<span class="bubble komputerowa"></span>
						<div>Komputerowa</div>
					</label>
				</div> 
			<input 
				type="submit" 
				value="Dodaj grę" />
		</form>

		<label><span>Sortuj</span><input type="checkbox" v-model="sort" /></label>
		<div class="games" v-if="!sort">
			<div v-for="game in game_store.games" :key="game" class="game">
				<h3>{{ game.title }}</h3>
				<p>{{ game.category }}</p> 
				<div class="actions">
						<button class="delete" @click="RemoveGame(game.id)">Usuń</button>
                        <span @click.stop="ToggleCompleted(game.id)">&#10004;</span>
				</div>
			</div>
		</div>

		<div class="games" v-else>
			<div v-for="game in game_store.gameByTitle" :key="game" class="game">
				<h3>{{ game.title }}</h3>
				<p>{{ game.category }}</p> 
				<div class="actions">
						<button class="delete" @click="RemoveGame(game.id)">Usuń</button>
                        <span @click.stop="ToggleCompleted(game.id)">&#10004;</span>
				</div>
			</div>
		</div>
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;

}

body {
	background-color: #EEE;
}

main {
	padding: 1.5rem;
}

h1 {
	color: black;
	font-weight: 900;
	line-height: 1;
	text-transform: uppercase;
	margin-bottom: 1.5rem;
}

form {
	display: block;
	padding: 1.5rem;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	margin-bottom: 2rem;
}

input:not([type="checkbox"]) {
	appearance: none;
	border: none;
	outline: none;
	background: none;
}

input:not([type="submit"]):not([type="checkbox"]) {
	display: block;
	width: 100%;
	border: 1px solid #EEE;
	padding: 1rem;
	border-radius: 0.5rem;
	margin-bottom: 1rem;
	font-size: 1rem;
	transition: 0.4s;
}

input:not([type="submit"]):focus {
	border-color: #AAA;
}

input[type="submit"] {
	display: block;
	padding: 0.5rem 1rem;
	background-color: crimson;
	border-radius: 0.5rem;
	cursor: pointer;
	margin-left: auto;

	color: #FFF;
	font-size: 1rem;
	font-weight: 900;
	text-transform: uppercase;

	transition: 0.4s;
}

input[type="submit"]:hover {
	transform: scale(1.05);
	background-color: red;
}

label {
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
}

label input {
	margin-left: 0.5rem;
}

.games {
	display: block;
	padding: 1rem;
	background-color: #FFF;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	transition: 0.2s;
}

.games div {
	color: #AAA;
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
}

.games h3 {
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	transition: 0.2s;
}

.games:hover {
	box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	transform: scale(1.05);
}

.games:hover h3 {
	color: crimson;
}

.games:last-of-type {
	margin-bottom: 0;
}
</style>