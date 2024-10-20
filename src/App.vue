<template>
  <v-app>
    <!-- Navbar siempre visible -->
    <CustomNavbar />
    <!-- El contenido de la vista actual -->
    <v-container>
      <router-view />
    </v-container>
    <!-- Footer siempre visible -->
    <CustomFooter />
  </v-app>
</template>

<script setup>
import CustomNavbar from '@/components/layout/CustomNavbar.vue'
import CustomFooter from '@/components/layout/CustomFooter.vue'
</script>

<style>
</style>
