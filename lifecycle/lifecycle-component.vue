<template>
  <div class="lifecycleComponent">
    {{ content }}
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
        required: true
      }
    },

    // do not use arrow functions

    beforeCreate () {
      console.log('before create', this)
    },
    created () {
      console.log('create', this)
    },
    beforeMount () {
      console.log('before mount', this)
    },
    mounted () {
      console.log('mounted', this)
    },
    beforeUpdate () {
      console.log('before update', this)
    },
    updated () {
      console.log('updated', this)
    },
    beforeDestroy () {
      console.log('before destroy', this)
    },
    destroyed () {
      console.log('destroyed', this)
    }
  }
</script>

<style scoped>
  .lifecycleComponent {
    border: 1px solid red;
    margin: 1em;
    padding: 1em;
  }
</style>
