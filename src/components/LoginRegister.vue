<template>
  <q-form @submit="submitForm">
    <q-input
      v-if="tab === 'register'"
      class="q-mb-md"
      outlined
      v-model="formData.name"
      label="Name"
    />
    <q-input class="q-mb-md col" outlined v-model="formData.email" label="Email" />
    <q-input
      class="q-mb-md col"
      outlined
      v-model="formData.password"
      label="Password"
      type="password"
    />
    <div class="row justify-center">
      <q-btn color="primary" :label="tab" type="submit" />
    </div>
  </q-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions('store', ['registerUser', 'loginUser']),
    submitForm() {
      if (this.tab === 'login') {
        this.loginUser(this.formData)
      } else {
        this.registerUser(this.formData)
      }
    }
  }
}
</script>

<style>
</style>