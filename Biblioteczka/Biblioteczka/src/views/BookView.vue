<script>
import BooksComponents from '../components/BookComponents.vue';
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

    
    moveToDashboard() {
      this.$router.push("/dashboard");
    },

},

    components: {
    BooksComponents
    }
}
</script>

<template>

    <div class="user-display">
      <div class="loged-as">Jesteś zalogowany jako:</div>
      <div class="username_display">{{ this.email }}</div>
      <Button class="button" label="Wyloguj się" @click="signOut" severity="danger" rounded />
    
      <div class="alternative">
        Przejdź do <Button label="STRONY GŁÓWNEJ" @click="moveToDashboard" severity="secondary" rounded />
      </div>
    </div>
  <BooksComponents />
</template>

<style>
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

.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
