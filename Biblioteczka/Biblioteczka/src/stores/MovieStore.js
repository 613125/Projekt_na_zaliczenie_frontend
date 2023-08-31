import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieshelf', {
    state: () => ({
      movies: [],
      id: 0,
    }),
    actions: {
      addMovie(item) {
        this.movies.push({item, id: this.id++, completed: false })
      },
      deleteMovie(itemID) {
        this.movies = this.movies.filter((object) => {
          return object.id !== itemID;
        });
        },
    toggleCompleted(idToFind) {
        const movie = this.movies.find((obj) => obj.id === idToFind);
        if (movie) {
             movie.completed = !movie.completed;
           }
         },
    
  }
})