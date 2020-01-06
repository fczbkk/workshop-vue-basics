<template>
  <div>
    <button @click="$emit('valueChange', count - 1)">-</button>
    {{ count }}
    <button @click="$emit('valueChange', count + 1)">+</button>
  </div>
</template>

<script>
export default {
  name: 'CustomNumberEditor',
  model: {
    prop: 'count',
    event: 'valueChange'
  },
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
