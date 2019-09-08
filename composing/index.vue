<template>
  <div>
    <h1>Personal data</h1>
    <personal-data />

    <h1>Additional data</h1>
    <additional-data />
  </div>
</template>

<script>
  import PersonalData from './PersonalData.vue'
  import AdditionalData from './AdditionalData'

  export default {
    components: {
      PersonalData,
      AdditionalData
    }
  }
</script>

<style scoped>

</style>
