<script>
import { ref } from 'vue'
import { useGameStore } from '../stores/GamesStore'
import { storeToRefs } from "pinia";
export default {

  setup() {
	
    const game = ref('')
    const store = useGameStore()
    const { games } = storeToRefs(store);
    const { toggleCompleted, deleteGame, } = store;

    function addItemAndClear(item) {
      if (item.length === 0 ) {
		return alert("Podaj nazwę gry")
      }

      store.addGame(item)
      game.value = ''
    }
    return { game, addItemAndClear, games, toggleCompleted, deleteGame }
  },
  }
</script>

<template>
	<h1><img alt="controller" src="../assets/controller.svg" class="h-2rem"/> GROTEKA</h1>
  <form @submit.prevent="addItemAndClear(game)">
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputText id="title" v-model="game" />
            <label for="title">Podaj tytuł gry</label>
        </span>
    </div> 
		<Button type="submit" label="Dodaj" icon="pi pi-check" @click="SubmitEvent" severity="success" rounded/>
  </form>
<div class="games"> 
    <div v-for="game in games" :key="game.id">
    <div>
      <span :class="{ completed: game.completed }">{{ game.item }}</span>
      <div class="actions">
      <span id="completed" @click.stop="toggleCompleted(game.id)">&#10004;</span>
      <span id="deleted" @click="deleteGame(game.id)">&#10060;</span>

      </div>
    </div>
  </div>
</div>
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
	background-color: cornflowerblue;
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
	background-color: cornflowerblue;
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
	color: cornflowerblue;
}

.games:last-of-type {
	margin-bottom: 0;
}
.completed {
  text-decoration: line-through;
}

#completed{
	color: green
}

#deleted {
	color: red
}
</style>