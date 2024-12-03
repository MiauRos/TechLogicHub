<template>
  <v-container>
    <Titles title="MY COURSES" icon="mdi-book" />
    <br />
    <v-card>
      <v-data-table
        :headers="headers"
        :items="courseList"
        class="elevation-1"
        item-value="id_a"
        item-key="id_a"
      ></v-data-table>
    </v-card>
  </v-container>
</template>

<script setup>
import axios from 'axios';
import Titles from '@/components/Titles.vue'
import { onMounted, ref } from 'vue'

const user = ref({});
const courseList = ref([]);
const headers = ref([
  { title: "Curso", key: "curso" },
  { title: "Materia", key: "materia" },
  { title: "Alumno", key: "alumno" },
  { title: "Fecha", key: "fecha" },
  { title: "Hora", key: "hora" },
  { title: "Duración (hr)", key: "duracion" },
]);

onMounted(async () => {
  user.value = JSON.parse(localStorage.getItem('user'));
  try {
    let res = await axios.get(
      `http://localhost:3000/course/teacher/${user.value.id_p}`
    );
    await createTableItems(res.data);
    // courseList.value = res.data;
  } catch (error) {
    console.log(error);
  }
});

const createTableItems = async (courses) => {
  for (let course of courses) {
    let x = {};
    x.curso = course.id_c;
    x.fecha = course.fecha;
    x.hora = course.hora;
    x.duracion = course.duracion;
    let res = await axios.get(
      `http://localhost:3000/subject/${course.id_m}`
    );
    x.materia = res.data.name;
    let res2 = await axios.get(
      `http://localhost:3000/student/${course.id_a}`
    );
    x.alumno = res2.data.name;
    courseList.value.push(x);
  }
}
</script>

<style>
/* Estilos opcionales para el contenedor y la tarjeta */
.v-card {
  margin: auto; /* Centrar la tarjeta en la página */
}
</style>
