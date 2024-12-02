<template>
  <v-app>
    <v-container class="d-flex justify-center align-center fill-height">
      <v-sheet
        class="pa-6"
        elevation="10"
        rounded
        width="400"
        style="background-color: #10193A; color: white"
      >
        <v-img
          :src="logo"
          max-width="120"
          max-height="120"
          class="mx-auto mb-4"
        ></v-img>
        <h2 class="text-h5 text-center mb-6" style="color: #1CA2E7">
          Log In
        </h2>
        <v-alert :text="message" color="error" v-if="message" dense/>
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-4"
            label="Email"
            clearable
            color="#1CA2E7"
            hide-details
            outlined
            dense
          ></v-text-field>
          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            type="password"
            class="mb-4"
            label="Password"
            clearable
            color="#1CA2E7"
            hide-details
            outlined
            dense
          ></v-text-field>
          <v-btn
            :disabled="!form"
            :loading="loading"
            color="#1CA2E7"
            block
            class="mt-4"
            size="large"
            type="submit"
          >
            LOG IN
          </v-btn>
          <v-card-actions class="d-flex justify-center mt-2">
            <v-btn href="#" class="text-body-2" style="color: #1CA2E7">
              Forgot password?
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-sheet>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router/index.js'
import axios from 'axios';
import logo from '@/assets/Logo3.jpg'

const form = ref(false);
const email = ref('');
const password = ref('');
const loading = ref(false);
const message = ref('');

const onSubmit = async () => {
  try {
    let res = await axios.get(
      `http://localhost:3000/user/email/${email.value}`
    );
    if (res.data && res.data.password === password.value) {
      message.value = "";
      loading.value = true;
      if (res.data.type == 1) {
        await getStudentData(res.data.id);
      }
      setTimeout(() => {
        loading.value = false;
        router.push("/home");
      }, 2000);
    } else {
      throw new Error("Usuario o Contraseña incorrecto");
    }
  } catch (error) {
    console.log(error);
    message.value = "Usuario o Contraseña incorrecto";
    email.value = '';
    password.value = '';
  }
};

const getStudentData = async (id) => {
  let userData = await axios.get(`http://localhost:3000/student/${id}`);
  localStorage.setItem('user', JSON.stringify(userData.data));
}

const required = (v) => {
  return !!v || 'Field is required';
};
</script>

<style scoped>
.text-h5 {
  font-weight: bold;
  font-size: 1.5rem;
  color: #1CA2E7;
}
</style>
