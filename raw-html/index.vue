<template>
  <div>
    <h1>Preview</h1>
    <div v-html="htmlContent"></div>

    <h1>Editor</h1>
    <div>
      <textarea
        v-model="htmlContent"
        rows="20"
        cols="100"
      ></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        htmlContent: 'this is <strong>bold</strong> and this is <em>italic</em>'
      }
    }
  }
</script>

<style scoped>

</style>
