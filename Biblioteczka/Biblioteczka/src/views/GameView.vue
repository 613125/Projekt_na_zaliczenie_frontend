<script>
import GameComponents from '../components/GameComponents.vue';
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
    GameComponents
    }
}
</script>

<template>
    <main>
    <div>
        <div class="text-center">Jesteś zalogowany jako</div>
      <div id="username_display" class="display-6">{{ this.email }}</div>
      <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
        Wyloguj się
      </button>
        <div class="alternative-option mt-4">
          Przejdź do strony głównej <button @click="moveToDashboard">Strona główna</button>
        </div>
    </div>    
        <GameComponents />
    </main>
</template>

<style>

.selector-for-some-widget {
  box-sizing: content-box;
}
</style>
