<template>
  <div>
    <p>
      <custom-checkbox>Simple example</custom-checkbox>
    </p>
    <p>
      <custom-checkbox :disabled="true">Disabled</custom-checkbox>
    </p>
  </div>
</template>

<script>
import CustomCheckbox from './CustomCheckbox'
export default {
  components: { CustomCheckbox }
}
</script>

<style scoped>

</style>
