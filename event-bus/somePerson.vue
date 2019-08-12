<template>
  <div>
    <h1>{{ name }}</h1>
    <p>
    <input v-model="message" />
    <button @click="doSay">Say</button>
    <button @click="doWhisper">Whisper</button>
    <button @click="doShout">Shout</button>
    </p>
  </div>
</template>

<script>
  import { EventBus } from './event-bus'

  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        message: ''
      }
    },

    methods: {
      doSay () {
        EventBus.$emit('say', {message: this.message, name: this.name})
      },
      doWhisper () {
        EventBus.$emit('whisper', {message: this.message.toLowerCase(), name: this.name})
      },
      doShout () {
        EventBus.$emit('shout', {message: this.message.toUpperCase(), name: this.name})
      }
    }
  }
</script>

<style scoped>

</style>
