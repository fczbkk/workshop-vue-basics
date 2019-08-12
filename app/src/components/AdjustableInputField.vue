<template>
  <div>
    <button
      @click="adjustValue(-1)"
      ref="removeButton"
    >-</button>
    <input v-model="inputValue" />
    <button
      @click="adjustValue(1)"
      ref="addButton"
    >+</button>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      }
    },

    data () {
      return {
        inputValue: this.value
      }
    },

    methods: {
      adjustValue (delta) {
        const newValue = this.inputValue + delta
        if (newValue >= 0) {
          this.inputValue = newValue
          this.$emit('input', this.inputValue)
        }
      }
    }
  }
</script>

<style scoped>

</style>
