<script>
import { ref } from 'vue'
import { useBookStore } from '../stores/BookStore'
import { storeToRefs } from "pinia";

export default {
    setup() {
        const book = ref('');
        const store = useBookStore();
        const { books } = storeToRefs(store);
        const { toggleCompleted, deleteBook } = store;
        function addItemAndClear(item) {
            if (item.length === 0) {
                return alert("Podaj tytuł książki");
            }
            store.addBook(item);
            book.value = '';
        };

        return { book, addItemAndClear, books, toggleCompleted, deleteBook };
    },

}
</script>

<template>
    <h1><img alt="book" src="../assets/book-half.svg" class="h-2rem"/> BIBLIOTEKA</h1>
  <form @submit.prevent="addItemAndClear(book)">
    <div class="card flex justify-content-center">
        <span class="p-float-label">
            <InputText id="title" v-model="book" />
            <label for="title">Podaj tytuł książki</label>
        </span>
    </div> 
			
		<Button type="submit" label="Dodaj" icon="pi pi-check" @click="SubmitEvent" severity="success" rounded/>
  </form>

<div class="books"> 
    <div v-for="book in books" :key="book.id">
    <div>
      <span :class="{ completed: book.completed }">{{ book.item }}</span>
      <div class="actions">
      <span id="completed" @click.stop="toggleCompleted(book.id)">&#10004;</span>
      <span id="deleted" @click="deleteBook(book.id)">&#10060;</span>
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

.books {
	display: block;
	padding: 1rem;
	background-color: #FFF;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	transition: 0.2s;
}

.books div {
	color: #AAA;
	font-size: 0.875rem;
	margin-bottom: 0.5rem;
}

.books h3 {
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	transition: 0.2s;
}

.books:hover {
	box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	transform: scale(1.05);
}

.books:hover h3 {
	color: cornflowerblue;
}

.books:last-of-type {
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