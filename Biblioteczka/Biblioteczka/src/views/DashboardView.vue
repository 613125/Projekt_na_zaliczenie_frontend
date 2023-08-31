<script>
import { getAuth } from "firebase/auth";

const auth = getAuth();

export default {
  data() {
    return {
      email: auth.currentUser.email,
    };
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },

    moveToBookView() {
      this.$router.push("/bookshelf");
    },

    moveToMovieView() {
      this.$router.push("/movieshelf")
    },

    moveToGameView() {
      this.$router.push("/gameshelf")
    },


  },
};
</script>

<template>

  <img class="image" src="@/assets/image.jpg">
  <div class="head">
    <h1>TWOJA MULTIMEDIALNA PÓŁKA</h1>
  </div>
  <div class="user-display">
    <div class="loged-as">Jesteś zalogowany jako:</div>
    <div class="username_display">{{ this.email }}</div>
    <Button class="button" label="Wyloguj się" @click="signOut" severity="danger" rounded />
  </div>
  <div class="center">
    <div class="alternative">
      Przejdź do <Button label="BIBLIOTEKI" severity="secondary" rounded @click="moveToBookView"><img alt="book" src="../assets/book-half.svg" class="h-2rem"/>  BIBLIOTEKI </Button>
    </div>
    <div class="alternative">
      Przejdź do  <Button label="FILMOTEKI" severity="info" rounded @click="moveToMovieView"><img alt="TV" src="../assets/tv.svg" class="h-2rem"/> FILMOTEKI</Button> 
    </div>
    <div class="alternative">
      Przejdź do <Button label="GROTEKI" severity="warning" rounded @click="moveToGameView"><img alt="controller" src="../assets/controller.svg" class="h-2rem"/> GROTEKI</Button>
    </div>
  </div>

  </template>

<style>

* {
	  margin: 0;
	  padding: 0;
	  box-sizing: border-box;
	  font-family: sans-serif;
  }

  body {
	  background-color: #EEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }

  main {
	  padding: 1.5rem;
  }

  .image {
    width: 100vw;
    height: 20vh;
  }

  .head {
    padding: 4vh;
    text-align: center;
  } 

  .user-display {
    display: block;
	  padding: 2vh;
	  background-color: #fff;
	  border-radius: 0.5rem;
	  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	  margin-bottom: 2rem;
    text-align: right;
  }
.loged-as {
  padding: 1vh;
}
.username-dispaly {
  padding: 1vh;

}
.selector-for-some-widget {
  box-sizing: content-box;
}

.button {
  margin: 1vh 1vw;
}
.center {
  display: block;
	padding: 2vh;
	background-color: #fff;
	border-radius: 0.5rem;
	box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	margin-bottom: 2rem;
  text-align: center;
}

.alternative {
  padding: 1vh;
  text-align: left;

}
</style>