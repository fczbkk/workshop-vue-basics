<template>
  <div>

    <h1>Personal data</h1>
    <pre>{{ person }}</pre>

    <h1>Direct object manipulation</h1>
    <p>
      <button @click="person.lastName = 'Fridrich'">Add last name</button>
      <button @click="person.nick = 'Fczbkk'">Add nick</button>
    </p>

    <h1>Object mutation</h1>
    <p>
      <button @click="addLastName">Add last name</button>
      <button @click="addNick">Add nick</button>
    </p>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        person: {
          firstName: 'Riki'
        }
      }
    },
    methods: {
      addLastName () {
        this.$set(this.person, 'lastName', 'Fridrich')
      },
      addNick () {
        this.$set(this.person, 'nick', 'Fczbkk')
      }
    }
  }
</script>
