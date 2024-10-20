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

const color = ref('#3386C1')
</script>

<style scoped>
.page-title-card {
  background-color: #f5f5f5; /* Color de fondo claro */
  border-radius: 8px; /* Esquinas redondeadas */
  padding: 16px; /* Espaciado interno */
  margin-bottom: 20px; /* Margen inferior */
}

.title {
  font-size: 24px; /* Tamaño del título */
  font-weight: bold; /* Negrita */
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
