<template>
  <v-container>
    <!-- Carrusel con los cursos -->
    <v-carousel hide-delimiter-background show-arrows show-indicators>
      <v-carousel-item v-for="(card, index) in cards" :key="index">
        <v-card height="400" width="250" class="mx-auto">
          <!-- Imagen en la parte superior del Curso -->
          <v-img :src="card.image" height="200" />

          <v-card-title>{{ card.title }}</v-card-title>
          <v-card-text v-if="!card.overlay">{{ card.content }}</v-card-text>

          <v-overlay v-model="card.overlay" class="align-center justify-center" contained>
            <v-card class="pa-4">
              <v-card-title>Detalles del Curso</v-card-title>
              <v-card-text>
                <p><strong>Materia:</strong> {{ card.subject }}</p>
                <p><strong>Hora:</strong> {{ card.time }}</p>
                <p><strong>Profesor:</strong> {{ card.teacher }}</p>
              </v-card-text>
              <v-row justify="center">
                <v-btn color="gray" @click="hideOverlay(index)"> Regresar </v-btn>
              </v-row>
            </v-card>
          </v-overlay>

          <v-row justify="center" class="mt-auto" v-if="!card.overlay">
            <v-btn class="mb-2" color="blue" @click="toggleOverlay(index)"> Más info </v-btn>
            <v-btn class="mb-2" color="success" @click="selectCourse(index)"> Seleccionar </v-btn>
          </v-row>
        </v-card>
      </v-carousel-item>
    </v-carousel>

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
// Importa tus imágenes desde la carpeta assets
import img1 from '@/assets/circuitos.jpg';
import img2 from '@/assets/fisica.jpg';
import img3 from '@/assets/progra.jpg';
import img4 from '@/assets/quimica.jpg';
import router from '@/router/index.js'

export default {
  data() {
    return {
      cards: [
        {
          title: 'Mallas y nodos',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Circuitos',
          time: '09:00 AM - 10:30 AM',
          teacher: 'Profesor Pérez',
          image: img1,  // Usa la imagen importada
        },
        {
          title: 'Fuerza',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Fisica',
          time: '11:00 AM - 12:30 PM',
          teacher: 'Profesora López',
          image: img2,  // Usa la imagen importada
        },
        {
          title: 'Herencia',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Programacion 3',
          time: '01:00 PM - 02:30 PM',
          teacher: 'Profesor González',
          image: img3,  // Usa la imagen importada
        },
        {
          title: 'Tabla periodica',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Quimica',
          time: '03:00 PM - 04:30 PM',
          teacher: 'Profesora Rodríguez',
          image: img4,  // Usa la imagen importada
        },
      ],
    };
  },
  methods: {
    toggleOverlay(index) {
      this.cards[index].overlay = !this.cards[index].overlay;
    },
    hideOverlay(index) {
      this.cards[index].overlay = false;
    },
    selectCourse(index) {
      // Lógica para seleccionar el curso
      console.log(`Curso seleccionado: ${this.cards[index].title}`);
    },
    openCalendar() {
      // Aquí agregas la lógica para abrir el calendario o realizar la acción que quieras
      console.log('Abriendo calendario...');
      router.push("/calendar");
    },
  },
};
</script>

<style scoped>
.v-carousel-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.mt-auto {
  margin-top: auto; /* Empuja el botón hacia la parte inferior */
}

/* Estilo del botón flotante */
.floating-btn {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
