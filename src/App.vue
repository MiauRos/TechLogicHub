<template>
  <v-app>
    <!-- Navbar siempre visible -->
    <CustomNavbar />
    <!-- El contenido de la vista actual -->
    <main>
      <v-container>
        <router-view />
      </v-container>
    </main>
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
