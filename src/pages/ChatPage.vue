<template>
  <q-page class="flex column">
    <q-banner class="text-center bg-grey-4">User us offline.</q-banner>
    <div class="q-pa-md column col justify-end">
      <q-chat-message
        :key="message.text"
        v-for="message in messages"
        :name="message.from"
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
export default {
  data() {
    return {
      newMessage: '',
      messages: [
        {
          text: 'Hey, how are you?',
          from: 'me',
        },
        {
          text: 'Fine, and you?',
          from: 'them',
        },
        {
          text: 'Goog goog',
          from: 'me',
        },
      ]
    }
  },
  methods: {
    sendMessage() {
      console.log(this.newMessage);

      this.messages.push({
        text: this.newMessage,
        from: 'me'
      })
    }
  }
}
</script>
