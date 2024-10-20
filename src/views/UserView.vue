<template>
  <v-container>
    <Titles title="USER PROFILE" icon="mdi-account" />
    <v-card>
      <v-card-text>
        <v-form @submit.prevent="onSubmit">
          <v-text-field
            v-model="user.name"
            label="Name"
            :rules="[required]"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.email"
            label="Email"
            :rules="[required, emailRule]"
            required
          ></v-text-field>

          <v-text-field
            v-model="user.password"
            label="Password"
            type="password"
            :rules="[required]"
            required
          ></v-text-field>

          <v-btn type="submit" :loading="loading" color="primary">
            Save Changes
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import Titles from '@/components/Titles.vue'

// TODO: Unharcode this data
const user = ref({
  name: 'Carlos Mauricio Rosales Rodríguez',
  email: '177691@upslp.edu.mx',
  password: 'PasswordExample'
})

const loading = ref(false)

const onSubmit = () => {
  loading.value = true
  // Simular una llamada a la API para guardar los datos
  setTimeout(() => {
    console.log('User data saved:', user.value)
    loading.value = false
  }, 2000)
}

// Función de validación requerida
const required = (v) => !!v || 'Field is required'

// Validación de email
const emailRule = (v) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(v) || 'E-mail must be valid'
}
</script>

<style scoped>
</style>
