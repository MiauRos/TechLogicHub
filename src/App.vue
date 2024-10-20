<template>
  <v-app>
    <CustomNavbar />

    <main>
      <v-container fluid>
        <router-view />
      </v-container>
    </main>

    <CustomFooter />
  </v-app>
</template>

<script setup>
import CustomNavbar from '@/components/layout/CustomNavbar.vue'
import CustomFooter from '@/components/layout/CustomFooter.vue'
</script>

<style>
</style>
