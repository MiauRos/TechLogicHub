<template>
  <v-container>
    <Titles title="Crear Materia"/>
    <br/>
    <v-card>
      <v-card-text>
        <v-form @submit.prevent="crearCurso" v-model="form">
          <v-text-field
            label="Nombre de la materia"
            v-model="subject.name"
            :rules="[required]"
            required
          ></v-text-field>

          <v-text-field
            label="Descripción"
            v-model="subject.descr"
            required
          ></v-text-field>

          <!-- Botón de Crear curso -->
          <v-btn color="#10193A" type="submit" class="mt-4" :disabled="!form">Crear</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import Titles from '@/components/Titles.vue';
import { ref } from 'vue';
import axios from 'axios'

const form = ref(false);
const subject = ref({
  name: '',
  descr: ''
});

const crearCurso = async () => {
  await axios.post(`http://localhost:3000/subject/`, subject.value);
  location.reload();
}

const required = (v) => {
  return !!v || 'Field is required';
};
</script>

<style scoped>
</style>
