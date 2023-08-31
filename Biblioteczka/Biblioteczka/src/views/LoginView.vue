<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      email: "",
      password: "",

    };
  },
  methods: {
    login(submitEvent) {
      this.email = submitEvent.target.elements.email.value;
      this.password = submitEvent.target.elements.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_1 = document.querySelector("#alert_1");
          alert_1.classList.remove("d-none");
          alert_1.innerHTML = errorMessage;
          console.log(alert_1);
        });
    },
    moveToRegister() {
      this.$router.push("/register");
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
      <form @submit.prevent="login">
        <h2 class="title">Zaloguj się</h2>
        <div class="card flex justify-content-center">
          <span class="p-float-label">
            <InputText id="email" v-model="email" />
            <label for="email">Podaj adres e-mail</label>
          </span>
        </div>
        <div class="card flex justify-content-center">
          <span class="p-float-label">
            <Password v-model="password" toggleMask inputId="password" :feedback="false"/>
            <Label for="password">Podaj hasło</Label>
            </span>
        </div>
        <Button label="Zaloguj się" severity="success" type="submit"/>


        <div class="alternative">
          Nie masz konta? Możesz zarejestrować się 
          <Button @click="moveToRegister" label="TUTAJ" size="small" text/>
        </div>

       <div class="alert" role="alert" id="alert_1"></div> 
      
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