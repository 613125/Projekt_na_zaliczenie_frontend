import { defineStore } from "pinia"



export const useGameStore = defineStore("games", {
	state: () => {
		return {
			games: [],
            id: 0
		}
	},
	actions: {
		addGame(game) {
			this.games.push({...game, id: this.id++, completed: false})		
		},
		removeGame(gameId) {
			this.games = this.games.filter((game) => {return game.id !== gameId})
		},
		toggleCompleted(idToFind) {
			const game = this.games.find((obj) => obj.id === idToFind);
			if (game) {
				 game.completed = !game.completed;
			   }
			 },
	},
	getters: {
		gameByTitle(state) {
			const sortable = [...state.games]
			return sortable.sort((a, b) => a.title.localeCompare(b.title))
		}
	}
})