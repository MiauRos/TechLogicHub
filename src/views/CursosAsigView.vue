<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">
        <v-btn @click="goBack" icon>
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        Gestión de Inscripciones
      </v-card-title>
      <v-card-text>
        <!-- Formulario para crear inscripciones -->
        <v-form @submit.prevent="createInscripcion">
          <v-text-field
            label="Curso ID"
            type="number"
            v-model="newInscripcion.cursoId"
            required
          />
          <v-text-field
            label="Alumno ID"
            type="number"
            v-model="newInscripcion.alumnoId"
            required
          />
          <v-btn type="submit" color="primary">Crear Inscripción</v-btn>
        </v-form>

        <v-divider></v-divider>

        <!-- Mostrar lista de inscripciones -->
        <v-subheader>Inscripciones Existentes</v-subheader>
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="inscripcion in newArray"
              :key="inscripcion.id"
            >
              <v-list-item-content>
                <!-- Información del curso en la inscripción -->
                <v-card class="mx-auto" max-width="400">
                  <v-img :src="inscripcion.cursoResponse.image" height="200px"></v-img>
                  <v-card-title>{{ inscripcion.cursoResponse.title }}</v-card-title>
                  <v-card-subtitle>
                    Asignatura: {{ inscripcion.cursoResponse.subject }}<br>
                    Fecha: {{ inscripcion.cursoResponse.date }}<br>
                    Inicio: {{ inscripcion.cursoResponse.startTime }}<br>
                    Alumno: {{ inscripcion.userResponse.name }}
                  </v-card-subtitle>
                  <v-card-actions>
                    <!-- Botones para editar/eliminar inscripciones -->
                    <v-btn @click="editInscripcion(inscripcion.id)" icon>
                      <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                    <v-btn @click="deleteInscripcion(inscripcion.id)" icon>
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!-- Editar Inscripción -->
        <v-divider v-if="editMode"></v-divider>
        <div v-if="editMode">
          <h3>Editar Inscripción</h3>
          <v-form @submit.prevent="updateInscripcion">
            <v-text-field
              label="Curso ID"
              type="number"
              v-model="selectedInscripcion.cursoId"
              required
            />
            <v-text-field
              label="Alumno ID"
              type="number"
              v-model="selectedInscripcion.alumnoId"
              required
            />
            <v-btn type="submit" color="primary">Actualizar Inscripción</v-btn>
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
      inscripciones: [],
      newInscripcion: {
        cursoId: '',
        alumnoId: ''
      },
      editMode: false,
      selectedInscripcion: {},
      newArray: [] // Aquí guardamos las inscripciones junto con la info del curso y alumno
    };
  },
  methods: {
    async fetchInscripciones() {
      try {
        const response = await axios.get('http://localhost:3000/ins');
        for (let i = 0; i < response.data.length; i++) {
          let cResponse = await axios.get(`http://localhost:3000/curso/${response.data[i].cursoId}`);
          let uResponse = await axios.get(`http://localhost:3000/user/${response.data[i].alumnoId}`);
          this.newArray.push({
            courseId: response.data[i].cursoId,
            studentId: response.data[i].alumnoId,
            cursoResponse: cResponse.data,
            userResponse: uResponse.data
          });
        }
        this.inscripciones = response.data;
      } catch (error) {
        console.error('Error fetching inscripciones:', error);
      }
    },
    async createInscripcion() {
      try {
        await axios.post('http://localhost:3000/ins', this.newInscripcion);
        this.newInscripcion = { cursoId: '', alumnoId: '' };
        this.fetchInscripciones();
      } catch (error) {
        console.error('Error creando inscripcion:', error);
      }
    },
    async editInscripcion(id) {
      this.editMode = true;
      this.selectedInscripcion = this.inscripciones.find(ins => ins.id === id);
    },
    async updateInscripcion() {
      try {
        await axios.put(`http://localhost:3000/ins/${this.selectedInscripcion.id}`, this.selectedInscripcion);
        this.editMode = false;
        this.selectedInscripcion = {};
        this.fetchInscripciones();
      } catch (error) {
        console.error('Error actualizando inscripcion:', error);
      }
    },
    async deleteInscripcion(id) {
      try {
        await axios.delete(`http://localhost:3000/ins/${id}`);
        this.fetchInscripciones();
      } catch (error) {
        console.error('Error eliminando inscripcion:', error);
      }
    },
    goBack() {
      this.$router.go(-1); // Navegar a la página anterior
    }
  },
  mounted() {
    this.fetchInscripciones();
  }
};
</script>

<style scoped>
.v-card {
  max-width: 400px;
  margin: 16px auto; /* Centramos las tarjetas */
}
</style>
