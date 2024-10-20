<template>
  <v-container>
    <!-- Botón para regresar -->
    <v-row justify="start">
      <v-btn color="primary" @click="goBack">Regresar</v-btn>
    </v-row>

    <!-- Calendario -->
    <v-row justify="space-around">
      <v-date-picker
        color="#3386C1"
        show-adjacent-months
        v-model="selectedDate"
        @input="checkClasses"
      ></v-date-picker>
    </v-row>

    <!-- Si hay clases para la fecha seleccionada, se muestran aquí -->
    <v-row justify="center" v-if="classesForDate.length > 0">
      <v-col cols="12" md="6">
        <v-card class="pa-4" outlined>
          <v-card-title>
            Clases para {{ selectedDateFormatted }}
          </v-card-title>
          <v-card-text>
            <ul>
              <li v-for="(clase, index) in classesForDate" :key="index">
                <strong>{{ clase.subject }}</strong> con {{ clase.teacher }} a las {{ clase.time }}
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Si no hay clases programadas para la fecha seleccionada -->
    <v-row justify="center" v-else>
      <v-col cols="12" md="6">
        <v-card class="pa-1" outlined>
          <v-card-title>
            No hay clases programadas para {{ selectedDateFormatted }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '@/router/index.js'

export default {
  data() {
    return {
      // Fecha seleccionada en el calendario
      selectedDate: null,
      // Clases simuladas con fechas como cadenas en formato 'YYYY-MM-DD'
      classes: [
        {
          date: '2024-10-21',
          subject: 'Circuitos',
          teacher: 'Profesor Pérez',
          time: '09:00 AM - 10:30 AM',
        },
        {
          date: '2024-10-21',
          subject: 'Programación',
          teacher: 'Profesora López',
          time: '11:00 AM - 12:30 PM',
        },
        {
          date: '2024-10-22',
          subject: 'Matemáticas',
          teacher: 'Profesor García',
          time: '01:00 PM - 02:30 PM',
        },
      ],
      // Almacena las clases que se muestran según la fecha seleccionada
      classesForDate: [],
    };
  },
  computed: {
    // Formatea la fecha seleccionada para mostrarla correctamente
    selectedDateFormatted() {
      return this.selectedDate
        ? new Date(this.selectedDate).toLocaleDateString()
        : '';
    },
  },
  methods: {
    // Verifica si hay clases programadas para la fecha seleccionada
    checkClasses() {
      console.log('Fecha seleccionada:', this.selectedDate);

      if (this.selectedDate) {
        const selectedDateStr = this.formatDate(this.selectedDate);
        console.log('Fecha seleccionada (formateada):', selectedDateStr);

        this.classesForDate = this.classes.filter((clase) => {
          console.log('Comparando con clase:', clase.date);
          return clase.date === selectedDateStr;
        });
        console.log('Clases encontradas:', this.classesForDate);
      }
    },
    // Función para formatear la fecha a 'YYYY-MM-DD'
    formatDate(date) {
      const d = new Date(date);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      const year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    },
    // Función para regresar a la página anterior
    goBack() {
      router.push("/home") // Navega hacia la página anterior en el historial
    },
  },
};
</script>

<style scoped></style>
