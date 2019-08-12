<template>
  <div>
    Mouse is at: {{ mousePositionLeft }} x {{ mousePositionTop }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        mousePositionLeft: 0,
        mousePositionTop: 0
      }
    },

    methods: {
      handleMouseMove (event) {
        this.mousePositionLeft = event.pageX
        this.mousePositionTop = event.pageY
      }
    },

    created () {
      document.addEventListener('mousemove', this.handleMouseMove)
    },

    destroyed () {
      document.removeEventListener('mousemove', this.handleMouseMove)
    }
  }
</script>
