<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">Gestión de Inscripciones</v-card-title>
      <v-card-text>
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

        <v-subheader>Inscripciones Existentes</v-subheader>
        <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="inscripcion in newArray"
              :key="inscripcion.id"
            >
              <v-list-item-content>
                <v-list-item-title>
                  Curso: {{inscripcion.cursoResponse.title}}<br>
                  Fecha: {{inscripcion.cursoResponse.date}}<br>
                  Inicio: {{inscripcion.cursoResponse.startTime}}<br>
                  Alumno: {{inscripcion.userResponse.name}}
                </v-list-item-title>
                <v-list-item-actions>
                  <v-btn @click="editInscripcion(inscripcion.id)" icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn @click="deleteInscripcion(inscripcion.id)" icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-actions>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

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
      newArray: []
    };
  },
  methods: {
    async fetchInscripciones() {
      try {
        const response = await axios.get('http://localhost:3000/ins');
        //Regresa arreglo (array), llamada para obtener los datos. Ciclo recorre array (response.data.idcurso)
        for(let i = 0; i < response.data.length; i++){
          let cResponse = await axios.get('http://localhost:3000/curso/'+response.data[i].cursoId);
          let uResponse = await axios.get('http://localhost:3000/user/'+response.data[i].alumnoId);
          this.newArray.push({
            courseId: response.data[i].cursoId,
            studentId: response.data[i].alumnoId,
            cursoResponse: cResponse.data,
            userResponse: uResponse.data
          });
        }
        this.inscripciones = response.data;
        console.log(response.data);
        console.log(this.newArray);
      } catch (error) {
        console.error('Error fetching inscripciones:', error);
      }
    },
    async createInscripcion() {
      try {
        await axios.post('http://localhost:3000/ins', this.newInscripcion);
        this.newInscripcion = { cursoId: '', alumnoId: '' }; // Limpiar el formulario
        this.fetchInscripciones(); // Actualizar la lista
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
        this.fetchInscripciones(); // Actualizar la lista
      } catch (error) {
        console.error('Error actualizando inscripcion:', error);
      }
    },
    async deleteInscripcion(id) {
      try {
        await axios.delete(`http://localhost:3000/ins/${id}`);
        this.fetchInscripciones(); // Actualizar la lista
      } catch (error) {
        console.error('Error eliminando inscripcion:', error);
      }
    }
  },
  mounted() {
    this.fetchInscripciones(); // Cargar inscripciones al montar el componente
  }
};
</script>

<style>
/* Estilos opcionales para el contenedor y la tarjeta */
.v-card {
  max-width: 600px;
  margin: auto; /* Centrar la tarjeta en la página */
}
</style>
