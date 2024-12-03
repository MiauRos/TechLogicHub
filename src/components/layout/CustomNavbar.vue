<template>
  <v-app-bar color="#10193A" dark elevate-on-scroll>
    <v-toolbar-title class="text-h6 font-weight-bold">Tech Logic Hub</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn to="/" v-if="show" class="text-white">Register</v-btn>
    <v-btn to="/home" v-if="!show && student" class="text-white">Home</v-btn>
    <v-btn to="/tutorHome" v-if="!show && !student" class="text-white">Home</v-btn>
    <v-btn to="/ins" v-if="!show && student" class="text-white">My courses</v-btn>
    <v-btn to="/tus-cursos" v-if="!show && !student" class="text-white">My courses</v-btn>
    <v-btn to="/selectCourse" v-if="!show && student" class="text-white">Select Course</v-btn>
    <v-btn to="/createCourse" v-if="!show && !student" class="text-white">Create Course</v-btn>
    <v-btn to="/user" v-if="!show" class="text-white">User</v-btn>
    <v-btn to="/" v-if="!show" class="text-white" @click="logOut">Log Out</v-btn>
  </v-app-bar>
</template>

<script setup>
import router from '@/router/index.js'
import { computed } from 'vue'

const student = computed(() => {
  let user = JSON.parse(localStorage.getItem('user'));
  if (user) {
    if (user.mat) {
      return true;
    }
  } else {
    return false;
  }
})

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
