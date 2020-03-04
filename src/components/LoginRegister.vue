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
    submitForm() {
      if (this.tab === 'login') {
        console.log('login');
      } else {
        console.log('register');
      }
    }
  }
}
</script>

<style>
</style>