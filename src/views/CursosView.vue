<template>
  <v-container>
    <v-card>
      <v-btn @click="goBack" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-card-title class="headline">Gestión de Cursos</v-card-title>
      <v-card-text>
        <!-- Formulario para crear un nuevo curso -->
        <v-form @submit.prevent="createCurso">
          <v-text-field
            label="Título"
            v-model="newCurso.title"
            required
          />
          <v-text-field
            label="Contenido"
            v-model="newCurso.content"
            required
          />
          <v-text-field
            label="Materia"
            v-model="newCurso.subject"
            required
          />
          <v-text-field
            label="Fecha"
            v-model="newCurso.date"
            type="date"
            required
          />
          <v-text-field
            label="Hora de Inicio"
            v-model="newCurso.startTime"
            type="time"
            required
          />
          <v-text-field
            label="Hora de Fin"
            v-model="newCurso.endTime"
            type="time"
            required
          />
          <v-text-field
            label="URL de la Imagen"
            v-model="newCurso.image"
          />
          <v-btn type="submit" color="primary">Crear Curso</v-btn>
        </v-form>

        <v-divider></v-divider>

        <!-- Lista de cursos existentes -->
        <v-subheader>Cursos Existentes</v-subheader>
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="curso in cursos"
              :key="curso.id"
            >
              <v-list-item-content>
                <v-list-item-title>
                  {{curso.title}}<br>
                  {{curso.date}} - {{curso.startTime}} a {{curso.endTime}}<br>
                  Materia: {{curso.subject}}
                </v-list-item-title>
                <v-list-item-actions>
                  <v-btn @click="editCurso(curso.id)" icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteCurso(curso.id)" icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-actions>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider v-if="editMode"></v-divider>

        <!-- Formulario para editar un curso existente -->
        <div v-if="editMode">
          <h3>Editar Curso</h3>
          <v-form @submit.prevent="updateCurso">
            <v-text-field
              label="Título"
              v-model="selectedCurso.title"
              required
            />
            <v-text-field
              label="Contenido"
              v-model="selectedCurso.content"
              required
            />
            <v-text-field
              label="Materia"
              v-model="selectedCurso.subject"
              required
            />
            <v-text-field
              label="Fecha"
              v-model="selectedCurso.date"
              type="date"
              required
            />
            <v-text-field
              label="Hora de Inicio"
              v-model="selectedCurso.startTime"
              type="time"
              required
            />
            <v-text-field
              label="Hora de Fin"
              v-model="selectedCurso.endTime"
              type="time"
              required
            />
            <v-text-field
              label="URL de la Imagen"
              v-model="selectedCurso.image"
            />
            <v-btn type="submit" color="primary">Actualizar Curso</v-btn>
          </v-form>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cursos: [], // Lista de cursos
      newCurso: {
        title: '',
        content: '',
        subject: '',
        date: '',
        startTime: '',
        endTime: '',
        image: ''
      },
      editMode: false,
      selectedCurso: {}
    };
  },
  methods: {
    async fetchCursos() {
      try {
        const response = await axios.get('http://localhost:3000/curso');
        this.cursos = response.data;
      } catch (error) {
        console.error('Error al obtener los cursos:', error);
      }
    },
    async createCurso() {
      try {
        await axios.post('http://localhost:3000/curso', this.newCurso);
        this.newCurso = {
          title: '',
          content: '',
          subject: '',
          date: '',
          startTime: '',
          endTime: '',
          image: ''
        }; // Limpiar el formulario
        this.fetchCursos(); // Actualizar la lista
      } catch (error) {
        console.error('Error al crear el curso:', error);
      }
    },
    async editCurso(id) {
      this.editMode = true;
      this.selectedCurso = this.cursos.find(curso => curso.id === id);
    },
    async updateCurso() {
      try {
        await axios.put(`http://localhost:3000/curso/${this.selectedCurso.id}`, this.selectedCurso);
        this.editMode = false;
        this.selectedCurso = {};
        this.fetchCursos(); // Actualizar la lista
      } catch (error) {
        console.error('Error al actualizar el curso:', error);
      }
    },
    async deleteCurso(id) {
      try {
        await axios.delete(`http://localhost:3000/curso/${id}`);
        this.fetchCursos(); // Actualizar la lista
      } catch (error) {
        console.error('Error al eliminar el curso:', error);
      }
    },
    goBack() {
      this.$router.go(-1); // Navegar a la página anterior
    }
  },
  mounted() {
    this.fetchCursos(); // Cargar los cursos al montar el componente
  }
};
</script>

<style>
/* Estilos opcionales para el contenedor y la tarjeta */
.v-card {
  max-width: 600px;
  margin: auto; /* Centrar la tarjeta en la página */
}
</style>
