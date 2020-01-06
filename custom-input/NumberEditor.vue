<template>
  <div>
    <button @click="$emit('input', value - 1)">-</button>
    {{ value }}
    <button @click="$emit('input', value + 1)">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumberEditor',
  props: {
    value: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
