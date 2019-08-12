<template>
  <div>
    <h1>Product properties</h1>
    <ul>
      <li
        v-for="(val, key) in productProperties"
        :id="key"
      >
        {{key}}: {{val}}
        <button @click="removeProperty(key)">Remove</button>
      </li>
    </ul>

    <h2>Add properties</h2>
    <p>
      Property name:
      <input ref="propertyName" />
    </p>
    <p>
      Property value:
      <input ref="propertyValue" />
    </p>
    <p>
      <button @click="addProperty">Add property</button>
    </p>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        productProperties: {
          width: 100,
          height: 200,
          length: 300
        }
      }
    },

    methods: {
      addProperty () {
        const keyField = this.$refs.propertyName
        const valField = this.$refs.propertyValue

        // this.productProperties[keyField.value] = valField.value
        this.$set(this.productProperties, keyField.value, valField.value)

        keyField.value = ''
        valField.value = ''
      },

      removeProperty (key) {
        this.$delete(this.productProperties, key)
      }
    }
  }
</script>

<style scoped>

</style>
