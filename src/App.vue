<template>
  <v-app>
    <CustomNavbar />

    <main class="main-container">
      <router-view />
    </main>

    <CustomFooter />
  </v-app>
</template>

<script setup>
import CustomNavbar from '@/components/layout/CustomNavbar.vue'
import CustomFooter from '@/components/layout/CustomFooter.vue'
</script>

<style>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
  height: calc(100vh - 120px); /* Altura total menos navbar y footer */
  margin: 0;
  padding: 0;
}

body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.v-container {
  margin: 0 !important;
  padding: 0 !important;
}

.v-card {
  margin: 0 !important;
}
</style>
