<template>
  <div>
    <p>
      first: <input v-model="firstname">
    </p>
    <p>
      last: <input v-model="lastname">
    </p>
  </div>
</template>

<script>

function parseFullName (input) {
  const [firstname = '', lastname = ''] = input.split(' ')
  return {
    firstname,
    lastname
  }
}

export default {
  name: 'NameEditor',
  data () {
    return {
      ...parseFullName(this.value)
    }
  },
  props: {
    value: {
      type: String,
      default: 'John Doe',
      required: false
    }
  },

  watch: {
    joinedName () {
      this.$emit('input', this.joinedName)
    },
    value () {
      const {firstname, lastname} = parseFullName(this.value)
      this.firstname = firstname
      this.lastname = lastname
    }
  },

  computed: {
    joinedName () {
      return [this.firstname, this.lastname]
        .filter(item => item !== '')
        .join(' ')
    }
  }
}
</script>

<style scoped>

</style>
