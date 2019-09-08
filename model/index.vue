<template>
  <div>

    <h1>Text input</h1>
    <p><input type="text" v-model="textValue"></p>
    <p>Text input: {{ textValue }}</p>

    <h1>Checkbox</h1>
    <p>
      <label>
        <input type="checkbox" v-model="checkboxValue">
        Toggle checkbox
      </label>
    </p>
    <p>Checkbox state: {{ checkboxValue }}</p>

    <h1>Radio</h1>
    <p>
      <label>
        <input type="radio" value="first" v-model="radioValue">
        First
      </label>
    </p>
    <p>
      <label>
        <input type="radio" value="second" v-model="radioValue">
        Second
      </label>
    </p>
    <p>
      <label>
        <input type="radio" value="third" v-model="radioValue">
        Third
      </label>
    </p>
    <p>Radio value: {{ radioValue }}</p>

    <h1>Select</h1>
    <p>
      <select v-model="selectValue">
        <option value="first">First</option>
        <option value="second">Second</option>
        <option value="third">Third</option>
      </select>
    </p>
    <p>Selected value: {{ selectValue }}</p>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        textValue: '',
        checkboxValue: false,
        radioValue: 'first',
        selectValue: 'first'
      }
    }
  }
</script>

<style scoped>

</style>
