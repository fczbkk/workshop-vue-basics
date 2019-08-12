<template>
  <li class="categoryItem">
    {{title}}
  </li>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .categoryItem {
    padding: 0.5em;
    border: 1px solid #ccc;
  }
  .categoryItem:hover {
    border-color: #000;
  }
</style>
