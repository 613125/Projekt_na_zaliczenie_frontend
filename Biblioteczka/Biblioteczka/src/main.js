
import { createApp, } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button'
import Message from 'primevue/message';
import Dropdown from 'primevue/dropdown';
import 'primeicons/primeicons.css';
import '../node_modules/primevue/resources/themes/nano/theme.css'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('InputText', InputText)
app.component('Password', Password);
app.component('Button', Button)
app.component('Message', Message)
app.component('Dropdown', Dropdown)

app.mount('#app')

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyCjQjUr3-y6wR-IjeY9VVYpKchqmD22jV0",
    authDomain: "projekt-na-zaliczenie-be239.firebaseapp.com",
    projectId: "projekt-na-zaliczenie-be239",
    storageBucket: "projekt-na-zaliczenie-be239.appspot.com",
    messagingSenderId: "626023024694",
    appId: "1:626023024694:web:bcb92394a3c40988693097",
    measurementId: "G-RD6J8YPM6D"
};
const app2 = initializeApp(firebaseConfig);
export { app2 };


