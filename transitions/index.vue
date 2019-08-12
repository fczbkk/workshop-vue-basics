<template>
  <div>
    <div class="tabsList">
      <button @click="currentTab = 'firstContent'">First tab</button>
      <button @click="currentTab = 'secondContent'">Second tab</button>
      <button @click="currentTab = 'thirdContent'">Third tab</button>
    </div>

    <transition name="fade" mode="out-in">
      <div v-if="currentTab === 'firstContent'" key="firstContent">
        <h1>First content</h1>
        <p>This is content of first tab</p>
      </div>

      <div v-if="currentTab === 'secondContent'" key="secondContent">
        <h1>Second content</h1>
        <p>This is content of second tab</p>
      </div>

      <div v-if="currentTab === 'thirdContent'" key="thirdContent">
        <h1>Third content</h1>
        <p>This is content of third tab</p>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        currentTab: 'firstContent'
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
