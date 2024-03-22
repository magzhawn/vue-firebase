import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDBr4a5-IOEJLQzWldR4mBsGVAEkZwmL-I",
  authDomain: "edu-db-11a97.firebaseapp.com",
  projectId: "edu-db-11a97",
  storageBucket: "edu-db-11a97.appspot.com",
  messagingSenderId: "80611664122",
  appId: "1:80611664122:web:6852432680318c5ba4a943",
  measurementId: "G-144RB07X29"
};

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
