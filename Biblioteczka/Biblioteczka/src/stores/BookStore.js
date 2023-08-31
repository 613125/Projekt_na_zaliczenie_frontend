import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookshelf', {
    state: () => ({
      books: [],
      id: 0,
    }),
    actions: {
      addBook(item) {
        this.books.push({item, id: this.id++, completed: false })
      },
      deleteBook(itemID) {
        this.books = this.books.filter((object) => {
          return object.id !== itemID;
        });
        },
    toggleCompleted(idToFind) {
        const book = this.books.find((obj) => obj.id === idToFind);
        if (book) {
             book.completed = !book.completed;
           }
         },
    
  }
})