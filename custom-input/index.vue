<template>
  <div>
    <p>CurrentValue: <input v-model.number="currentValue" /></p>
    <number-editor v-model="currentValue" />
    <custom-number-editor v-model="currentValue" />
  </div>
</template>

<script>
import NumberEditor from './NumberEditor'
import CustomNumberEditor from './CustomNumberEditor'
export default {
  components: { CustomNumberEditor, NumberEditor },
  data () {
    return {
      currentValue: 0
    }
  }
}
</script>

<style scoped>

</style>
