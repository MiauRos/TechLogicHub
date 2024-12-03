<template>
  <v-container class="mt-12 container">
    <Titles title="Cursos" class="mb-4" />
    <v-container class="scrollable">
      <v-row>
        <v-col
          v-for="subject in subjectList"
          :key="subject.id_m"
          cols="12" md="6" lg="6"
        >
          <v-card class="mb-4">
            <v-img :src="image" height="150px"></v-img>
            <v-card-title>{{ subject.name }}</v-card-title>
            <v-card-subtitle>{{ subject.descr }}</v-card-subtitle>
            <v-card-actions class="justify-center">
              <v-btn
                color="white"
                @click="openDialog(subject)"
                style="background-color: #10193A"
              >
                Seleccionar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="text-h5">Seleccionar Materia</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="formIsValid">
            <v-text-field
              v-model="selectedSubject.name"
              label="Nombre de la materia"
              disabled
            ></v-text-field>

            <v-select
              label="Tutor de la materia"
              v-model="selectedTeacher"
              :items="names"
              @change="getTeacher"
            />

            <v-text-field
              v-model="course.fecha"
              label="Fecha de la clase"
              readonly
              append-icon="mdi-calendar"
              @click="menuFecha = true"
              :value="formatDate(course.fecha)"
            />

            <v-menu v-model="menuFecha" :close-on-content-click="true" transition="slide-x-reverse" offset-y>
              <v-date-picker v-model="course.fecha" type="date"></v-date-picker>
            </v-menu>

            <v-select
              v-model="course.hora"
              :items="hourOptions"
              label="Hora de la clase"
              item-text="label"
              item-value="value"
              return-object
              required
            ></v-select>

            <v-select
              v-model="course.duracion"
              :items="durationOptions"
              label="Duración de la clase"
              item-text="label"
              item-value="value"
              required
            ></v-select>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="white" style="background-color: red" @click="dialog = false">Volver</v-btn>
          <v-btn text color="white" style="background-color: #10193A" @click="createCourse" :disabled="!formIsValid">Seleccionar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import Titles from '@/components/Titles.vue';
import { onBeforeMount, onMounted, ref } from 'vue'
import axios from 'axios';
import image from '@/assets/courses.jpg'
import router from '@/router/index.js'

const subjectList = ref([]);
const dialog = ref(false);
const selectedSubject = ref({});
const formIsValid = ref(false);
const teachers = ref([]);
const names = ref([]);
const selectedTeacher = ref(null);
const course = ref({
  id_p: null,
  id_a: null,
  id_m: null,
  fecha: null,
  hora: null,
  duracion: null,
});
const index = ref(0);
const user = ref({});
const menuFecha = ref(false);
const hourOptions = ref([]);
const durationOptions = ref([0.5, 1]);

onBeforeMount(() => {
  const start = 10;  // 10 AM
  const end = 17;    // 5 PM
  const options = [];
  for (let hour = start; hour <= end; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const value = `${hour < 10 ? '0' + hour : hour}:${minute === 0 ? '00' : '30'}`;
      options.push(value);
    }
  }
  hourOptions.value = options;
})

onMounted(async () => {
  try {
    let res = await axios.get(`http://localhost:3000/subject/`);
    subjectList.value = res.data;
    user.value = JSON.parse(localStorage.getItem('user'));
    let res2 = await axios.get(`http://localhost:3000/teacher/`);
    teachers.value = res2.data;
    names.value = teachers.value.map(teacher => teacher.name);
    console.log(teachers.value);
  } catch (e) {
    console.log(e);
  }
});

const openDialog = (subject) => {
  dialog.value = true;
  selectedSubject.value = subject;
  course.value.id_m = subject.id_m;
  course.value.id_a = user.value.id_a;
}

const createCourse = async () => {
  course.value.id_p = teachers.value[index.value].id_p;
  let d = course.value.fecha;
  course.value.fecha = d.toISOString().split('T')[0];
  try {
    await axios.post(`http://localhost:3000/course/`, course.value);
  } catch (e) {
    console.log(e);
  }
  dialog.value = false;
  router.push('/ins');
}

const getTeacher = () => {
  index.value = names.value.findIndex(name => name === selectedTeacher.value);
}

const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toISOString().split('T')[0]; // Formato 'YYYY-MM-DD'
}
</script>

<style scoped>
.container {
  padding: 100px;
}

.scrollable {
  max-height: calc(100vh - 250px);
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 16px;
}

.edit-icon {
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}
</style>
