<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    register(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log("Rejestracja udana");
          this.$router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_2 = document.querySelector("#alert_2");
          alert_2.classList.remove("d-none");
          alert_2.innerHTML = errorMessage;
          console.log(alert_2);
        });
    },

    moveToLogin() {
      this.$router.push("/");
    },
  },
};
</script>

<template>

  <img class="image" src="@/assets/image.jpg">
  <div class="head">
    <h1>TWOJA MULTIMEDIALNA PÓŁKA</h1>
  </div>

    <div class="container">
      <form @submit.prevent="register">
        <h2 class="title">Zarejestruj się</h2>
          <div class="card flex justify-content-center">
            <span class="p-float-label">
              <InputText id="email" v-model="email" />
              <label for="email">Podaj adres e-mail</label>
            </span>
          </div>
          <div class="card flex justify-content-center">
            <span class="p-float-label">
              <Password v-model="password" toggleMask inputId="password" promptLabel="Wpisz hasło" weakLabel="Za proste" mediumLabel="Średnio skomplikowane hasło" strongLabel="Skomplikowane hasło"/>
              <Label for="password">Podaj hasło</Label>
            </span>
          </div>
  
          <Button label="Zarejestruj się" severity="success" type="submit"/>

          <div class="alternative">
            Masz już konto? Zalogujesz się <Button @click="moveToLogin" label="TUTAJ" size="small" text/>
          </div>
        
          <div class="alert" role="alert" id="alert_2"></div>
        </form>
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



  .container {
    border: 1px solid;
    padding: 10px;
    border-radius: 0.5rem;
	  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	  margin-bottom: 2rem;
    position: absolute;

  }

  .title {
    padding: 1vh;
  }

  .card {
    padding: 2vh;
  }

  form {
	  display: block;
	  padding: 2vh;
	  background-color: #fff;
	  border-radius: 0.5rem;
	  box-shadow: 0 3px 6px rgba(0,0,0,0.1);
	  margin-bottom: 2rem;
  }


  .selector-for-some-widget {
  box-sizing: content-box;
}

</style>