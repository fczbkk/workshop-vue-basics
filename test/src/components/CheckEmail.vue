<template>
  <div>
    <p v-if="isLoading">Checking email...</p>
    <p v-else-if="isError">ERROR: Could not check new emails.</p>
    <p v-else>You've got {{ count }} emails.</p>
    <p>
      <button
        type="button"
        @click="updateCounter"
        ref="updateButton"
      >
        Check new emails
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'CheckEmail',
  data () {
    return {
      count: 0,
      isLoading: false,
      isError: false
    }
  },
  methods: {
    updateCounter () {
      this.isLoading = true
      fetch('https://api.myapp.com/get-email-count')
        .then((response) => response.json())
        .then((data) => {
          this.count = data.count
        })
        .catch(() => {
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style scoped>

</style>
