<template>
  <div>
    <lifecycle-component
      :content="content"
      v-if="doesExist"
    />

    <div>
      <input v-model="content" />
      <button @click="doesExist = !doesExist">Add / Remove</button>
    </div>

  </div>
</template>

<script>
  import LifecycleComponent from './lifecycle-component.vue'

  export default {
    data () {
      return {
        content: 'default content',
        doesExist: true
      }
    },
    components: {
      LifecycleComponent
    }
  }
</script>

<style scoped>

</style>
