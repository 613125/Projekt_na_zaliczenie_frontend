import { defineStore } from 'pinia'

export const useGameStore = defineStore('gameshelf', {
    state: () => ({
      games: [],
      id: 0,
    }),
    actions: {
      addGame(item) {
        this.games.push({item, id: this.id++, completed: false })
      },
      deleteGame(itemID) {
        this.games = this.games.filter((object) => {
          return object.id !== itemID;
        });
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
        const sortable = [state.games]
        return sortable.sort((a, b) => a.item.localeCompare(b.item))
    }
}
})