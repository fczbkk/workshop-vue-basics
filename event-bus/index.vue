<template>
  <div>
    <some-person name="John Doe" />
    <some-person name="Riki Fridrich" />

    <h1>Messages</h1>
    <ul>
      <li
        v-for="(message, index) in messages"
        :key="index"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
  import {EventBus} from './event-bus'
  import SomePerson from './somePerson'

  export default {
    components: {
      SomePerson
    },
    created () {
      EventBus.$on('say', ({message, name}) => this.messages.push(`${name} says: ${message}`))
      EventBus.$on('whisper', ({message, name}) => this.messages.push(`${name} whispers: 🤫 ${message}`))
      EventBus.$on('shout', ({message, name}) => this.messages.push(`${name} shouts: 🗣 ${message}`))
    },
    data () {
      return {
        messages: []
      }
    }
  }
</script>
