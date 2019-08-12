<template>
  <div>
    <my-message>
      This is a regular message.
    </my-message>
    <my-message message-type="error">
      Something wrong happened!
      <a href="#">Fix the error.</a>
    </my-message>
    <my-message message-type="success">
      Everything is fine.
      <a href="#">Continue to next page.</a>
    </my-message>
  </div>
</template>

<script>
  import MyMessage from './message.vue'
  export default {
    components: {
      MyMessage
    }
  }
</script>

<style scoped>

</style>
