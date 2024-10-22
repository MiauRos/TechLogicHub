<template>
  <v-container class="d-flex justify-center align-center" style="height: 100vh;">
    <v-card class="pa-5" max-width="500">
      <v-card-title>
        <h2>Crear nuevo curso</h2>
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="crearCurso">
          <v-text-field
            v-model="curso.nombre"
            label="Nombre del curso"
            required
          ></v-text-field>

          <v-text-field
            v-model="curso.descripcion"
            label="Descripción"
            required
          ></v-text-field>

          <!-- Campo de selección de materia -->
          <v-select
            v-model="curso.materia"
            :items="materias"
            label="Selecciona una materia"
            required
          ></v-select>

          <!-- Label de Fecha del curso -->
          <v-text-field
            v-model="curso.fecha"
            label="Fecha del curso"
            placeholder="Ej: 20/10/2024"
            required
          ></v-text-field>

          <!-- Label de Hora del curso -->
          <v-text-field
            v-model="curso.hora"
            label="Hora del curso"
            placeholder="Ej: 14:30"
            required
          ></v-text-field>

          <!-- Botón de Crear curso -->
          <v-btn color="primary" type="submit" class="mt-4">Crear curso</v-btn>
        </v-form>

        <v-alert v-if="mensaje" type="success" class="mt-4">
          {{ mensaje }}
        </v-alert>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      curso: {
        nombre: '',
        descripcion: '',
        materia: '',
        fecha: '',
        hora: ''
      },
      materias: ['Matemáticas', 'Historia', 'Ciencias', 'Inglés'],
      mensaje: ''
    };
  },
  methods: {
    crearCurso() {
      // Verificar que todos los campos estén llenos
      if (this.curso.nombre && this.curso.descripcion && this.curso.materia && this.curso.fecha && this.curso.hora) {
        this.mensaje = "¡Curso creado exitosamente!";
        // Reiniciar el formulario
        this.curso = {
          nombre: '',
          descripcion: '',
          materia: '',
          fecha: '',
          hora: ''
        };
      } else {
        this.mensaje = "Por favor completa todos los campos.";
      }
    }
  }
};
</script>

<style scoped>
</style>
