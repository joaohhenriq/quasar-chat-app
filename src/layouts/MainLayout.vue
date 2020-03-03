<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="$route.fullPath.includes('/chat')"
          v-go-back.single
          icon="arrow_back"
          label="back"
          flat
          dense
        />

        <q-toolbar-title class="absolute-center">{{title}}</q-toolbar-title>

        <q-btn
          icon="account_circle"
          label="Login"
          class="absolute-right q-pr-sm"
          to="/auth"
          no-caps
          flat
          dense
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  computed: {
    title() {

      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Quasar Chat App'
      else if (currentPath == '/chat') return 'Chat'
      else if (currentPath == '/auth') return 'Login'
    }
  }
}
</script>
