<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-row justify="center" align="center" class="my-5"> <!-- Agregar margen vertical -->
      <!-- Tarjeta 1: Tus Cursos -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="600" style="background-color: #f9c2c2; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;"> <!-- Aumentar max-width y height -->
          <v-card-title class="text-center" style="font-size: 1.8rem;">Tus Cursos</v-card-title> <!-- Aumentar tamaño de fuente -->
          <v-card-actions class="justify-center">
            <v-btn large color="primary" @click="goToPage('/tus-cursos')" style="font-size: 1.2rem;"> <!-- Aumentar tamaño de botón -->
              Ver Cursos
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Tarjeta 2: Cursos Agendados -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="600" style="background-color: #c2e1f9; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;"> <!-- Aumentar max-width y height -->
          <v-card-title class="text-center" style="font-size: 1.8rem;">Cursos Agendados</v-card-title> <!-- Aumentar tamaño de fuente -->
          <v-card-actions class="justify-center">
            <v-btn large color="success" @click="goToPage('/cursosAsig')" style="font-size: 1.2rem;">
              Ver Agendados
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Tarjeta 3: Calificaciones -->
      <v-col cols="12" md="6" lg="4">
        <v-card class="mx-auto" max-width="600" style="background-color: #c2f9c2; height: 400px; display: flex; flex-direction: column; justify-content: center; align-items: center;"> <!-- Aumentar max-width y height -->
          <v-card-title class="text-center" style="font-size: 1.8rem;">Calificaciones</v-card-title> <!-- Aumentar tamaño de fuente -->
          <v-card-actions class="justify-center">
            <v-btn large color="info" @click="showAlert" style="font-size: 1.2rem;">
              Ver Calificaciones
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Mostrar alerta -->
    <v-alert
      v-if="alertVisible"
      type="info"
      border="top"
      prominent
      class="my-alert"
      transition="scale-transition"
      dismissible
      @input="alertVisible = false"
    >
      Tus calificaciones están disponibles en la sección correspondiente. ¡Revísalas ahora!
    </v-alert>

    <!-- Botón flotante con icono de calendario -->
    <v-btn
      fab
      dark
      color="primary"
      class="floating-btn"
      @click="openCalendar"
    >
      <v-icon>mdi-calendar</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import router from '@/router/index.js';

export default {
  data() {
    return {
      alertVisible: false, // Controlar la visibilidad del alert
    };
  },
  methods: {
    goToPage(route) {
      // Redirige a la página seleccionada
      router.push(route);
    },
    openCalendar() {
      // Lógica para abrir el calendario
      router.push("/calendar");
    },
    showAlert() {
      // Mostrar el alert cuando se presiona "Ver Calificaciones"
      this.alertVisible = true;
    },
  },
};
</script>

<style scoped>
/* Estilo para centrar todo el contenido */
.fill-height {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-bottom: 64px; /* Para que el botón flotante no se sobreponga al contenido */
}

/* Estilo del botón flotante */
.floating-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
}

/* Estilo del alert */
.my-alert {
  position: fixed;
  bottom: 100px; /* Aumentamos la distancia del bottom */
  width: 80%;
  left: 10%;
  text-align: center;
  font-size: 16px;
  z-index: 1000;
}
</style>
