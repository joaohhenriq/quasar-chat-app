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
          v-if="!userDetails.userId"
          icon="account_circle"
          label="Login"
          class="absolute-right q-pr-sm"
          to="/auth"
          no-caps
          flat
          dense
        />

        <q-btn
          @click="logoutUser"
          v-else
          icon="account_circle"
          label="Loggout"
          class="absolute-right q-pr-sm"
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
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

export default {
  mixins: [mixinOtherUserDetails],
  computed: {
    ...mapState('store', ['userDetails']),
    title() {

      let currentPath = this.$route.fullPath
      if (currentPath == '/') return 'Quasar Chat App'
      else if (currentPath.includes('/chat')) return this.otherUserDetails.name
      else if (currentPath == '/auth') return 'Login'
    }
  },
  methods: {
    ...mapActions('store', ['logoutUser'])
  }
}
</script>
