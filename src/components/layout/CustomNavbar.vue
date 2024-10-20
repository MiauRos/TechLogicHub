<template>
  <v-app-bar color="#3386C1">
    <v-toolbar-title>Tech Logic Hub</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn text to="/" v-if="!show">Home</v-btn>
    <v-btn text to="/user" v-if="!show">User</v-btn>
  </v-app-bar>
</template>

<script setup>
import router from '@/router/index.js'
import { computed, onMounted } from 'vue'

const show = computed(() => {
  return router.currentRoute.value.name === 'login'
})
</script>

<style scoped>
/* Puedes agregar estilos específicos si lo deseas */
</style>
