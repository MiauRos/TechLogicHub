<template>
  <v-card class="page-title-card" outlined>
    <v-card-title class="title">
      <v-icon left :color="color">{{ icon }}</v-icon>
      <span>{{ title }}</span>
    </v-card-title>
    <v-card-subtitle v-if="subtitle" class="subtitle">
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-text v-if="description" class="description">
      {{ description }}
    </v-card-text>
  </v-card>
</template>

<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: 'mdi-information' // Icono predeterminado
  }
})

const color = ref('#FFFFFF')
</script>

<style scoped>
.page-title-card {
  background-color: #10193A; /* Fondo azul consistente con el login */
  color: white; /* Texto blanco */
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  color: white; /* Texto blanco */
}

.subtitle {
  font-size: 18px; /* Tamaño del subtítulo */
  color: #666; /* Color del subtítulo */
}

.description {
  font-size: 16px; /* Tamaño de la descripción */
  color: #444; /* Color de la descripción */
}
</style>
