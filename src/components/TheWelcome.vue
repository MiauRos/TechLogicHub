<template>
  <v-app>
    <v-sheet class="pa-12" rounded>


      <!-- Espacio agregado entre el v-app-bar y el formulario -->
      <v-card class="mx-auto px-6 py-8 mb-10" max-width="344">
        <v-sheet class="text-h5 text-center py-4"> Log In </v-sheet>
        <v-form v-model="form" @submit.prevent="onSubmit">
          <v-text-field
            v-model="email"
            :readonly="loading"
            :rules="[required]"
            class="mb-2"
            label="Email"
            clearable
          ></v-text-field>

          <v-text-field
            v-model="password"
            :readonly="loading"
            :rules="[required]"
            label="Password"
            placeholder="Enter your password"
            clearable
            type="password"
          ></v-text-field>

          <br />

          <v-btn
            :disabled="!form"
            :loading="loading"
            color="#3386C1"
            size="large"
            type="submit"
            variant="elevated"
            block
          >
            Log in
          </v-btn>
          <br />
          <v-card-actions class="d-flex justify-center">
            <v-btn text href="#" class="text-body-2" color="#3386C1">
              Forgot password?
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false,
  }),

  methods: {
    onSubmit() {
      if (!this.form) return

      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
    required(v) {
      return !!v || 'Field is required'
    },
  },
}
</script>

<style scoped>
.text-h5 {
  font-weight: bold;
  font-size: 1.25rem;
}
</style>

