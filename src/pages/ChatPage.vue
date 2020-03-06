<template>
  <q-page class="flex column">
    <q-banner
      v-if="!otherUserDetails.online"
      class="text-center bg-grey-4"
    >{{otherUserDetails.name}} is offline.</q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        :key="message.text"
        v-for="message in messages"
        :name="message.from == 'me' ? userDetails.name: otherUserDetails.name"
        :text="[message.text]"
        :sent="message.from == 'me' ? true : false"
      />
    </div>
    <q-footer elevated>
      <q-toolbar>
        <q-form @submit="sendMessage" class="full-width">
          <q-input
            bg-color="white"
            rounded
            v-model="newMessage"
            placeholder="Message"
            class="full-width"
            dense
            outlined
          >
            <template>
              <q-btn round dense flat type="submit" icon="send" color="primary" />
            </template>
          </q-input>
        </q-form>
      </q-toolbar>
    </q-footer>
  </q-page>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import mixinOtherUserDetails from 'src/mixins/mixin-other-user-details.js'

export default {
  mixins: [mixinOtherUserDetails],
  data() {
    return {
      newMessage: '',
    }
  },
  computed: {
    ...mapState('store', ['messages', 'userDetails']),
  },
  methods: {
    ...mapActions('store', ['firebaseGetMessages', 'firebaseStopGettingMessages']),
    sendMessage() {
      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  },
  mounted() {
    let otherUserId = this.$route.params.otherUserId

    this.firebaseGetMessages(otherUserId)

  },
  destroyed() {
    this.firebaseStopGettingMessages()
  }
}
</script>
