<template>
  <v-app-bar color="#10193A" dark elevate-on-scroll>
    <v-toolbar-title class="text-h6 font-weight-bold">Tech Logic Hub</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" v-if="show" class="text-white">Registration</v-btn>
    <v-btn to="/home" v-if="!show" class="text-white">Home</v-btn>
    <v-btn to="/user" v-if="!show" class="text-white">User</v-btn>
    <v-btn to="/ins" v-if="!show" class="text-white">Register</v-btn>
    <v-btn to="/" v-if="!show" class="text-white" @click="logOut">Log Out</v-btn>
  </v-app-bar>
</template>

<script setup>
import router from '@/router/index.js'
import { computed } from 'vue'

const show = computed(() => {
  return router.currentRoute.value.name === 'login'
})

const logOut = () => {
  localStorage.removeItem('user');
}
</script>

<style scoped>
.v-toolbar-title {
  margin-left: 16px;
}
</style>
