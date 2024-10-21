<template>
  <v-container>
    <v-row>
      <!-- Botón para crear nuevo curso -->
      <v-col cols="12" class="d-flex justify-end mb-4">
        <v-btn color="primary" @click="crearCurso">Crear nuevo curso</v-btn>
      </v-col>

      <!-- Recorremos la lista de cursos para mostrarlos en tarjetas -->
      <v-col v-for="(curso, index) in cursos" :key="index" cols="12" md="6" lg="4">
        <v-card>
          <v-img :src="curso.image" height="200px"></v-img>

          <v-card-title>{{ curso.title }}</v-card-title>
          <v-card-subtitle>{{ curso.subject }}</v-card-subtitle>

          <v-card-text>
            <p><strong>Horario:</strong> {{ curso.time }}</p>
            <p><strong>Profesor:</strong> {{ curso.teacher }}</p>
            <p>{{ curso.content }}</p>
          </v-card-text>

          <v-card-actions>
            <!-- Botón de Editar -->
            <v-btn color="info" @click="editarCurso(index)">Editar</v-btn>

            <!-- Botón de Eliminar -->
            <v-btn color="error" @click="eliminarCurso(index)">Eliminar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import img1 from '@/assets/circuitos.jpg';
import img2 from '@/assets/fisica.jpg';
import img3 from '@/assets/progra.jpg';
import img4 from '@/assets/quimica.jpg';

export default {
  data() {
    return {
      cursos: [
        {
          title: 'Mallas y nodos',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Circuitos',
          time: '09:00 AM - 10:30 AM',
          teacher: 'Profesor Pérez',
          image: img1,
        },
        {
          title: 'Fuerza',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Fisica',
          time: '11:00 AM - 12:30 PM',
          teacher: 'Profesora López',
          image: img2,
        },
        {
          title: 'Herencia',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Programacion 3',
          time: '01:00 PM - 02:30 PM',
          teacher: 'Profesor González',
          image: img3,
        },
        {
          title: 'Tabla periodica',
          content: 'Contenido del Curso',
          overlay: false,
          subject: 'Quimica',
          time: '03:00 PM - 04:30 PM',
          teacher: 'Profesora Rodríguez',
          image: img4,
        },
      ],
    };
  },
  methods: {
    crearCurso() {
      // Lógica para crear un nuevo curso
      alert('Funcionalidad de creación de curso no implementada.');
    },
    editarCurso(index) {
      // Lógica para editar el curso seleccionado
      const curso = this.cursos[index];
      alert(`Editando el curso: ${curso.title}`);
    },
    eliminarCurso(index) {
      // Lógica para eliminar el curso seleccionado
      const curso = this.cursos[index];
      if (confirm(`¿Estás seguro de que quieres eliminar el curso: ${curso.title}?`)) {
        this.cursos.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
