<template>
  <label>
    <input
      type="checkbox"
      :checked="value"
      @change="$emit('input', !value)"
      v-bind="$attrs"
    />
    <slot />
  </label>
</template>

<script>
export default {
  name: 'CustomCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
