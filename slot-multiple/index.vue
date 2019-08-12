<template>
  <div>
    <my-layout>

      <template v-slot:header>
        Header content.
      </template>

      <template v-slot:footer>
        Footer content.
      </template>

      <p>This is a content of this page.</p>

    </my-layout>
  </div>
</template>

<script>
  import MyLayout from './layout.vue'
  export default {
    components: {
      MyLayout
    }
  }
</script>

<style scoped>

</style>
