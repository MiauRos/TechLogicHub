<template>
  <v-container class="welcome-container" fill-height>
    <v-row align="center" justify="center" class="text-center">
      <v-col cols="12" md="8">
        <v-card class="pa-8">
          <v-card-title>
            <h1>¡Bienvenido{{ userName ? `, ${userName}` : '' }}!</h1>
          </v-card-title>
          <v-card-text>
            <p>Estamos encantados de tenerte aquí. Explora las opciones y selecciona la que necesites.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Estado
const userName = ref(null);

// Obtener el nombre del usuario al montar la página
onMounted(() => {
  const user = JSON.parse(localStorage.getItem('user'));
  userName.value = user?.name || 'Usuario';
});
</script>

<style scoped>
.welcome-container {
  background-image: url('https://static.vecteezy.com/system/resources/previews/000/938/594/non_2x/high-school-students-raising-their-hands-in-a-classroom-photo.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Asegura que el texto sea legible sobre el fondo */
}

.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 16px;
}

.v-btn {
  background-color: #10193A;
}
</style>
