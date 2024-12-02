<template>
  <v-container class="profile-container">
    <Titles title="USER PROFILE" icon="mdi-account" />
    <br/>
    <v-card class="profile-card" outlined>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="user.name"
            label="Nombre"
            color="#10193A"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="user.ape_p"
            label="Apellido Paterno"
            color="#10193A"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="user.ape_m"
            label="Apellido Materno"
            color="#10193A"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-if="user.mat"
            v-model="user.mat"
            label="Matricula"
            color="#10193A"
            outlined
            dense
          ></v-text-field>

          <v-checkbox
            v-if="user.is_premium"
            v-model="user.is_premium"
            label="Premium"
            color="#10193A"
          ></v-checkbox>

          <v-btn type="submit" :loading="loading" color="#10193A">
            Save Changes
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Titles from '@/components/Titles.vue'
import axios from 'axios'

const user = ref({})
const loading = ref(false)

const onSubmit = async () => {
  loading.value = true;
  if (user.value.mat) {
    await axios.put(`http://localhost:3000/student/${user.value.id_a}`, user.value);
  } else {
    await axios.put(`http://localhost:3000/teacher/${user.value.id_p}`, user.value);
  }
  localStorage.setItem('user', JSON.stringify(user.value));
  loading.value = false;
  location.reload();
}

onMounted(() => {
  user.value = JSON.parse(localStorage.getItem('user'));
})
</script>

<style scoped>
.profile-container {
  background-color: #FFFFFF; /* Fondo claro como el del login */
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.profile-card {
  width: 100%;
  padding: 20px;
  border-radius: 8px; /* Bordes más redondeados */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Sombra para dar relieve */
}

v-card-text {
  display: flex;
  flex-direction: column;
  gap: 16px; /* Espaciado uniforme entre elementos */
}
</style>
