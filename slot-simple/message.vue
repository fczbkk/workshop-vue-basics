<template>
  <div
    class="message"
    :class="messageType"
  >
    <p>
      <strong>Important message: </strong>
      <slot />
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      messageType: {
        type: String,
        default: 'info'
      }
    }
  }
</script>

<style scoped>
  .message {
    padding: 1em;
    color: white;
    background: gray;
  }
  .info {
    background: blue;
  }
  .error {
    background: red;
  }
  .success {
    background: green;
  }
</style>
