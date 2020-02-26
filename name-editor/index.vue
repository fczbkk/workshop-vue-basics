<template>
<div>
  <p>{{ fullname }}</p>
  <NameEditor v-model="fullname" />
</div>
</template>

<script>
import NameEditor from './NameEditor'
export default {
  components: { NameEditor },
  data () {
    return {
      fullname: 'Riki Fridrich'
    }
  }
}
</script>

<style scoped>

</style>
