<template>
  <div>
    <p>
      <label>
        <input type="checkbox" v-model="showMouseCoordinates">
        Show mouse coordinates
      </label>
    </p>
    <mouse-coordinates v-if="showMouseCoordinates" />
  </div>
</template>

<script>
  import MouseCoordinates from './MouseCoordinates.vue'

  export default {
    components: {
      MouseCoordinates
    },
    data () {
      return {
        showMouseCoordinates: false
      }
    }
  }
</script>

<style scoped>

</style>
