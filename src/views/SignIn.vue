<script setup>

import {ref} from "vue";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router/index"

const email = ref("");
const password = ref("");
const errMsg = ref("");

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Succefully registered!");
        router.push('/feed');
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "User not found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Wrong password";
            default:
                errMsg.value = "Email or password are incorrect";
                break;
        }
    })
};


</script>

<template>
    <h1>Sign in to account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
    <p v-if="errMsg">{{ errMsg }}</p>
</template>
