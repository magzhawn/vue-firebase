<script setup>

import {onMounted, ref} from "vue";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import router from "./router/index"

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
}

</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/feed">Feed</router-link>
    <router-link to="/sign-up" v-if="!isLoggedIn">Sign Up</router-link>
    <router-link to="/sign-in" v-if="!isLoggedIn">Sign In</router-link>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
  </nav>
  <router-view />
</template>
