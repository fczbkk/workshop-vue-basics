<template>
  <div>
    <button @click.stop="editItem">Edit</button>
  </div>
</template>

<script>
  export default {
    props: {
      label: {
        type: String,
        required: true
      }
    },
    methods: {
      editItem () {
        alert(`Edit item ${this.label}`)
      }
    }
  }
</script>
