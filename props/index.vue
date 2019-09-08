<template>
  <div>
    <h1>Personal data</h1>
    <personal-data
      firstName="Riki"
      lastName="Fridrich"
    />

    <h1>Additional data</h1>
    <additional-data
      :specializations="specializations"
      :hobbies="hobbies"
    />
  </div>
</template>

<script>
  import PersonalData from './PersonalData.vue'
  import AdditionalData from './AdditionalData'

  export default {
    components: {
      PersonalData,
      AdditionalData
    },

    data () {
      return {
        specializations: 'Javascript, Vue',
        hobbies: 'cooking, reading'
      }
    }
  }
</script>

<style scoped>

</style>
